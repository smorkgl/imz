import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3131",
});

export default instance;
