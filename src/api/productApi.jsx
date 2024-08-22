import axios from "axios";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/product`;

export const getProduct = async (productId) => {
  const res = await axios.get(`${host}/${productId}`);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${host}`);
  return res.data;
}