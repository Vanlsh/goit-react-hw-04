import styles from "./Grid.module.css";
import PropTypes from "prop-types";

const Grid = ({ children, photosRef }) => {
  return (
    <ul className={styles.list} ref={photosRef}>
      {children}
    </ul>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;
