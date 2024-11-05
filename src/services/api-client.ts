import axios, { AxiosRequestConfig } from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
