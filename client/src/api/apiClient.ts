import axios from "axios";

// const base_url = process.env.REACT_APP_BASE_URL;
const base_url = "http://localhost:1337";
const request = axios.create({
  baseURL: base_url,
  responseType: "json",
});

const homePage = {
  get: () => request.get("/homepage"),
};

export const apiClient = {
  homePage,
};
