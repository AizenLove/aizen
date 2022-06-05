import aspida from "@aspida/axios";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import api from "~/api/$api";

const devConfig: AxiosRequestConfig = {
  baseURL: "https://recommend.aizen.love",
  timeout: 2000,
};

const prodConfig: AxiosRequestConfig = {
  baseURL: "",
  timeout: 5000,
};

const baseApiClient = api(
  aspida(axios, process.env.NODE_ENV === "production" ? prodConfig : devConfig)
);

export const apiClient = baseApiClient;
export const axiosClient = axios.create(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);
