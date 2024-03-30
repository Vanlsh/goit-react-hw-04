import PropTypes from "prop-types";
import css from "./Notification.module.css";

const Notification = ({ children }) => {
  return (
    <div className={css.container}>
      <p>{children}</p>
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
};
export default Notification;
