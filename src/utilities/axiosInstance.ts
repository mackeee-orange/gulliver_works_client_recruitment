import axios, { AxiosTransformer } from "axios";
import humps from "humps";

export const HttpClient = axios.create({
  transformResponse: [
    ...((axios.defaults.transformResponse as AxiosTransformer[]) || []),
    (data) => {
      return humps.camelizeKeys(data);
    },
  ],
  transformRequest: [
    ...((axios.defaults.transformRequest as AxiosTransformer[]) || []),
    (data) => {
      return humps.decamelizeKeys(data);
    },
  ],
});

const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

if (token) {
  HttpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// https://ryotarch.com/javascript/react/swr-axios-typescript/
