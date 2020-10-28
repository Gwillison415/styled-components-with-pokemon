import axios from "axios";
const baseURL = "•	https://api.craft-demo.net/pokemon";
export const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "x-api-key": process.env.REACT_APP_API_KEY },
  params: {},
});
