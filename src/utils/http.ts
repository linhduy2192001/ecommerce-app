import axios, { AxiosInstance } from "axios";
import { AUTH_API, PRODUCT_API } from "../config/api";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000",
      timeout: 20000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const http = new Http().instance;
export default http;
