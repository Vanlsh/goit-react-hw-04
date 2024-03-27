import css from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.button} onClick={onLoadMore}>
      Load More
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
};

export default LoadMoreBtn;
