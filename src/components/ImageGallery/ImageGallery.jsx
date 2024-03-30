import { useRef, useEffect } from "react";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid.jsx";
import GridItem from "../GridItem/GridItem.jsx";
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
    <Grid className={css.gallery} photosRef={photosRef}>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <ImageCard photo={photo} onModalOpen={onModalOpen} />
        </GridItem>
      ))}
    </Grid>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onModalOpen: PropTypes.func,
};
export default ImageGallery;
