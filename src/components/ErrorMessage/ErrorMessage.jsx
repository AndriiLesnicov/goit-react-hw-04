import css from "./ErrorMessage.module.css";

const ErrorMessage = () => (
  <p className={css.message}>Щось пішло не так, спробуйте пізніше.</p>
);

export default ErrorMessage;
