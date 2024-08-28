import axios from "axios";
import { API_SERVER_HOST } from "./rootApi";

const host = `${API_SERVER_HOST}/categories`;

export const getChildernCategory = async () => {
  const res = await axios.get(`${host}/children`);
  return res.data;
};
