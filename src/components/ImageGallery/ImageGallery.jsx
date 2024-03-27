import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import Grid from "../Grid/Grid.jsx";
import GridItem from "../GridItem/GridItem.jsx";
import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos, onModalOpen }) => {
  return (
    <Grid className={css.gallery}>
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
