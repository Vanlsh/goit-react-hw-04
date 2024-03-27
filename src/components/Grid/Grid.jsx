import styles from "./Grid.module.css";
import PropTypes from "prop-types";

const Grid = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;
