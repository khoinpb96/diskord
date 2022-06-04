import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.API_URI + "users",
});

export default instance;
