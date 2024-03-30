import { useEffect, useState } from "react";
import { getImages } from "../api/getImages.js";

export const usePhotos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError(null);
        setIsLoading(true);

        const { data } = await getImages(query, page);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
        setTotalPage(data.total_pages);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const searchPhotos = (newQuery) => {
    if (newQuery === query) return;
    setPhotos(null);
    setPage(1);
    setQuery(newQuery);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return {
    page,
    photos,
    totalPages,
    isLoading,
    error,
    searchPhotos,
    loadMore,
  };
};
