import css from './global.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);
