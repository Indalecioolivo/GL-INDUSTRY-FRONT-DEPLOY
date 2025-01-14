import axios from "axios";
import { getItem } from "../utils/storage";

const api = axios.create({
  baseURL: "https://api-gl-backend-dc5aec0a15e3.herokuapp.com/",
  // baseURL: "http://localhost:3000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
api.interceptors.request.use(
  (config) => {
    const token = getItem("tokenGL");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
