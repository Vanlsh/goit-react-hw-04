import axios from "../axios.js";

export const getImages = async (query = "", page = 1) => {
  const response = await axios.get("/search/photos/", {
    params: {
      page,
      query,
    },
  });
  return response;
};
