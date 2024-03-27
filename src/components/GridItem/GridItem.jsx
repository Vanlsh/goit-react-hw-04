import styles from "./GridItem.module.css";
import PropTypes from "prop-types";

const GridItem = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

GridItem.propTypes = {
  children: PropTypes.node,
};

export default GridItem;
