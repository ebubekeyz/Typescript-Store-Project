import axios from "axios";

let productionUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000/api"
    : "https://node-store-project.onrender.com";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
