import axios from "axios";

const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});

export default instance;
