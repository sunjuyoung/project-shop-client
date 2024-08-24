import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
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

const responseFail = async (error) => {
  console.log("responseFail");
  console.log(error);
  if (error.response.data.code == "TOKEN-001") {
    const userInfo = getCookie("userInfo");
    const result = await refreshJWT(
      userInfo.accessToken,
      userInfo.refreshToken
    );
    userInfo.accessToken = result.accessToken;
    userInfo.refreshToken = result.refreshToken;
    setCookie("userInfo", JSON.stringify(userInfo), 1);

    //원래의 호출
    const originRequest = error.config;
    originRequest.headers.Authorization = `Bearer ${userInfo.accessToken}`;
    const result2 = await axios(originRequest);
    return result2;
  }
  return Promise.reject(error);
};
const beforeRes = async (response) => {
  console.log("beforeRes");
  //console.log(response);

  const data = response.data;

  //console.log(data);

  return response;
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);

jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
