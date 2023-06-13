import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Controls = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedbackList}>
    {options.map(options => (
      <li key={options}>
        <button
          className={css.controlBtn}
          type="button"
          onClick={() => onLeaveFeedback(options)}
        >
          {options}
        </button>
      </li>
    ))}
  </ul>
);

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Controls;
