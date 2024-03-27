import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_REACT_APP_API_ACCESS_KEY}`,
  },
  params: {
    per_page: 20,
    orientation: "landscape",
  },
});

export default instance;
