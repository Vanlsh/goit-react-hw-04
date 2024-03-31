import { useRef, useEffect } from "react";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard.jsx";
import { PHOTO_PER_PAGE } from "../../utils/constants.js";

const ImageGallery = ({ photos, onModalOpen }) => {
  const photosRef = useRef(null);

  useEffect(() => {
    if (photos.length > PHOTO_PER_PAGE) {
      const listItemRef =
        photosRef.current.children[photos.length - PHOTO_PER_PAGE];
      listItemRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [photos]);

  return (
    <ul className={css.list} ref={photosRef}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.item}>
          <ImageCard photo={photo} onModalOpen={onModalOpen} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onModalOpen: PropTypes.func,
};

export default ImageGallery;
