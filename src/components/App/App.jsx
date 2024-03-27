import { useEffect, useState } from "react";
import Modal from "react-modal";

import { getImages } from "../../api/getImages";
import photosJson from "../../photos.json";

import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Container from "../Container/Container.jsx";
import MainSection from "../MainSection/MainSection.jsx";

Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [photos, setPhotos] = useState(photosJson);

  const [isLoading, setIsLoading] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getImages(query, page);
        const { data } = response;
        // console.log(response);
        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setPhotos(null);
    setQuery(newQuery);
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const onModalOpen = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };
  const onModalClose = () => {
    setIsOpen(false);
  };

  console.log(photos?.length);
  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <MainSection>
        {photos && <ImageGallery photos={photos} onModalOpen={onModalOpen} />}
        {!photos?.length && <div>No found:(</div>}
        {isLoading && <Loader />}
        {photos?.length && <LoadMoreBtn onLoadMore={onLoadMore} />}
      </MainSection>
      <Modal isOpen={modalIsOpen} onRequestClose={onModalClose}>
        {selectedPhoto && <ImageModal photo={selectedPhoto} />}
      </Modal>
    </Container>
  );
}

export default App;
