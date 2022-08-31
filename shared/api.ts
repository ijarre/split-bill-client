import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

// const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
//   try {
//     const token = Cookies.get("token");
//     if (token != undefined) {
//       config.headers = config.headers ? config.headers : headers;
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   } catch (error) {
//     throw new Error();
//   }
// };

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/",
  headers,
  withCredentials: true,
});

// api.interceptors.request.use(injectToken, (err) => Promise.reject(err));

export default api;
