import axios from "axios";
import { API_SERVER_HOST } from "./rootApi";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/order`;

export const saveOrder = async (password) => {
  const res = await jwtAxios.post(`${host}`, password);
  return res;
};
