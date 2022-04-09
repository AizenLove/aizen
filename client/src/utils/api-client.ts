import aspida from "@aspida/axios";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import api from "~/api/$api";

const devConfig: AxiosRequestConfig = {
  baseURL: "http://192.168.1.6:80",
};

const prodConfig: AxiosRequestConfig = {
  baseURL: "",
};

const baseApiClient = api(
  aspida(axios, process.env.NODE_ENV === "production" ? prodConfig : devConfig)
);

export const apiClient = baseApiClient;
export const axiosClient = axios.create(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);
