import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ photo, onModalOpen }) => {
  const { urls, alt_description } = photo;
  return (
    <div className={css.card} onClick={() => onModalOpen(photo)}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  photo: PropTypes.object,
  onModalOpen: PropTypes.func,
};

export default ImageCard;
