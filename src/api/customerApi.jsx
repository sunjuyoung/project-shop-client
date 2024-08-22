import axios from "axios";
import { API_SERVER_HOST } from "./rootApi";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/customer`;

export const modifyPassword = async (password) => {
  const res = await jwtAxios.put(`${host}/modify-password`, password);
  return res;
};
