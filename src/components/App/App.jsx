import { useEffect, useState } from "react";
import Modal from "react-modal";

import { getImages } from "../../api/getImages";
import { modalStyles } from "../../utils/modalStyles.js";

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

Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [photos, setPhotos] = useState(null);
  const [totalPages, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError({ isError: false, message: "" });
        setIsLoading(true);
        const response = await getImages(query, page);
        const { data } = response;
        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
        setTotalPage(data.total_pages);
      } catch (e) {
        setError({ isError: true, message: e.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPhotos(null);
    setPage(1);
    setQuery(newQuery);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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
      <SearchBar handleSearch={handleSearch} />
      <MainSection>
        {photos && <ImageGallery photos={photos} onModalOpen={onModalOpen} />}
        {photos?.length === 0 && (
          <Notification>No image and photo are found</Notification>
        )}
        {error.isError && <ErrorMessage message={error.message} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div className={css.btnWrapper}>
            <LoadMoreBtn onLoadMore={onLoadMore}>Load More</LoadMoreBtn>
          </div>
        )}
      </MainSection>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onModalClose}
        style={modalStyles}
        closeTimeoutMS={200}
      >
        {selectedPhoto && (
          <ImageModal photo={selectedPhoto} closeModal={onModalClose} />
        )}
      </Modal>
    </Container>
  );
}

export default App;
