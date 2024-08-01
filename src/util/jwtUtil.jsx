import axios from "axios";
import { getCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/rootApi";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;

  const header = { headers: { Authorization: `Bearer ${accessToken}` } };
  const body = { refreshToken: refreshToken };

  //post방식으로 하는게 더 좋음
  const res = await axios.post(`${host}/token/refresh`, body, header);
  console.log("---------refreshJWT-------------");
  return res.data;
};
const beforeReq = (config) => {
  console.log("beforeReq");

  const userInfo = getCookie("userInfo");
  if (!userInfo) {
    return Promise.reject({
      response: { data: { error: "로그인이 필요합니다." } },
    });
  }

  const { accessToken } = userInfo;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const requestFail = (error) => {
  console.log("requestFail");
  return Promise.reject(error);
};

const responseFail = (error) => {
  console.log("responseFail");
  return Promise.reject(error);
};
const beforeRes = async (response) => {
  console.log("beforeRes");

  const data = response.data;

  console.log(data);

  return response;
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);

jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
