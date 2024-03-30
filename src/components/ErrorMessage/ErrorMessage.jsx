import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={css.container}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
