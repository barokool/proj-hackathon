import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://api-troviet.herokuapp.com/api",
});

export default instance;
