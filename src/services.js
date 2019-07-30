import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://desafio.tild.com.br/api/"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    console.log('fazendo');
    return axiosInstance.post(endpoint, body);
  }
  ,put(endpoint, body) {
    console.log(body);
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    console.log(endpoint);
    return axiosInstance.delete(endpoint);
  },
};
