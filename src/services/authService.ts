import { AUTH_API } from "../config/api";
import { User } from "../types/User";
import http from "../utils/http";

export const authService = {
  login(data: User) {
    return http.post(`${AUTH_API}`, data);
  },
  getUser() {
    return http.get(AUTH_API);
  },
};
