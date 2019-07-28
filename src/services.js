import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://desafio.tild.com.br/api/"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  }
  ,put(endpoint, body) {
    console.log(axiosInstance.put(endpoint, body));
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};
