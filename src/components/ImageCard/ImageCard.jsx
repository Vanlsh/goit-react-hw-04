import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ imgUrl, description, onModalOpen }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        loading="lazy"
        src={imgUrl}
        alt={description}
        onClick={onModalOpen}
      />
    </div>
  );
};

ImageCard.propTypes = {
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  onModalOpen: PropTypes.func,
};

export default ImageCard;
