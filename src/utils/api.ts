import axios from "axios";
import { GetAuthHeaders } from "../services/auth";

export const api = {
  get: async <T>(url: string, params?: object) => {
    const headers = await GetAuthHeaders();
    return axios.get<T>(url, {
      headers: headers,
      ...params,
    });
  },
};
