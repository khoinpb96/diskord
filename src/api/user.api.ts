import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/user",
});

export default instance;
