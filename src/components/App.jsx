import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Container } from './GlobalContainer/global';
import { Section } from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

// class FeedBackCounter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//     message: PropTypes.string.isRequired,
//     total: PropTypes.func.isRequired,
//     percent: PropTypes.func.isRequired,
//   };
//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback() !== 0
//       ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//       : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percent = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percent={percent}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

export const App = () => {
  const initialValue = 0;

  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);

  const options = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedback()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};

// App.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
//   message: PropTypes.string.isRequired,
//   total: PropTypes.func.isRequired,
//   percent: PropTypes.func.isRequired,
// };
