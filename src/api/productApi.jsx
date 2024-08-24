import axios from "axios";
import jwtAxios from "../util/jwtUtil";

import { API_SERVER_HOST } from "./rootApi";

const host = `${API_SERVER_HOST}/products`;

export const getProduct = async (productId) => {
  const res = await axios.get(`${host}/${productId}`);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${host}`);
  return res.data;
};

export const postAdd = async (product) => {
  const res = await axios.post(`${host}`, product);
  return res.data;
};
