import axios from "axios";
import { API_SERVER_HOST } from "./rootApi";

const host = `${API_SERVER_HOST}/payments`;

export const checkout = async (data) => {
  console.log(data);
  const res = await axios.post(`${host}/checkout`, data);
  return res;
};
