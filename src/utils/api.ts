import axios from "axios";
import { GetAuthHeaders } from "../services/auth";

//I used axios here because of its support of typescript and plenty of configuration availale which we may need in future if we scale the app

export const api = {
  get: async <T>(url: string, params?: object) => {
    const headers = await GetAuthHeaders();
    return axios.get<T>(url, {
      headers: headers,
      ...params,
    });
  },
};
