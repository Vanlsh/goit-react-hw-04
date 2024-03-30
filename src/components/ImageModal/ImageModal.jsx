import css from "./ImageModal.module.css";
import PropTypes from "prop-types";

const ImageModal = ({ photo }) => {
  return (
    <div className={css.modal}>
      <img src={photo.urls.regular} alt={photo.alt_description} />
    </div>
  );
};

ImageModal.propTypes = {
  photo: PropTypes.object,
};

export default ImageModal;
