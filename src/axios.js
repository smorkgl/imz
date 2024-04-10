import axios from "axios";

const instance = axios.create({
<<<<<<< Updated upstream
  baseURL: "http://localhost:3131/",
=======
  baseURL: "https://imz-server.vercel.app",
>>>>>>> Stashed changes
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
