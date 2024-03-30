import css from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore, refBtn, children }) => {
  return (
    <button ref={refBtn} className={css.button} onClick={onLoadMore}>
      {children}
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
};

export default LoadMoreBtn;
