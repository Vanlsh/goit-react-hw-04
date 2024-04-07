import axios from "axios";
import { PHOTO_PER_PAGE } from "./utils/constants.js";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_REACT_APP_API_ACCESS_KEY}`,
  },
  params: {
    per_page: PHOTO_PER_PAGE,
    orientation: "landscape",
  },
});

export default instance;
