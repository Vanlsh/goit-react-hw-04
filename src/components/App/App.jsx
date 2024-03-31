import { useState } from "react";

import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Container from "../Container/Container.jsx";
import MainSection from "../MainSection/MainSection.jsx";
import Notification from "../Notification/Notification.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { usePhotos } from "../../hooks/usePhotos.js";

function App() {
  const { page, photos, totalPages, isLoading, error, searchPhotos, loadMore } =
    usePhotos();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onModalOpen = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const onModalClose = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  const isShowBtn = Boolean(photos?.length && !isLoading && page < totalPages);

  return (
    <Container>
      <SearchBar handleSearch={searchPhotos} />
      <MainSection>
        {photos && <ImageGallery photos={photos} onModalOpen={onModalOpen} />}
        {photos?.length === 0 && (
          <Notification>No image and photo are found</Notification>
        )}
        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div className={css.btnWrapper}>
            <LoadMoreBtn onLoadMore={loadMore}>Load More</LoadMoreBtn>
          </div>
        )}
      </MainSection>
      <ImageModal
        photo={selectedPhoto}
        closeModal={onModalClose}
        modalIsOpen={modalIsOpen}
      />
    </Container>
  );
}

export default App;
