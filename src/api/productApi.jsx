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

export const getNewProducts = async () => {
  const res = await axios.get(`${host}/new`);
  return res.data;
};

export const getMdProducts = async () => {
  const res = await axios.get(`${host}/md`);
  return res.data;
};

export const getTrendProducts = async () => {
  const res = await axios.get(`${host}/trend`);
  return res.data;
};

export const postAdd = async (product) => {
  const res = await axios.post(`${host}`, product);
  return res.data;
};

export const postModify = async (product, id) => {
  const res = await axios.put(`${host}/${id}`, product);
  return res.data;
};
