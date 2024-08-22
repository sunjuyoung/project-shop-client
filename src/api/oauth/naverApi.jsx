import axios from "axios";

import { API_SERVER_HOST } from "../rootApi";

const client_id = "eofeAB8OANaCohB5ikzw";
const redirect_uri = "http://localhost:5173/oauth/naver";

const auth_code_path = "https://nid.naver.com/oauth2.0/authorize";

//인가 코드 받기위한 url
export const getNaverLoginLink = () => {
  const naverUrl = `${auth_code_path}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  return naverUrl;
};

//api 서버로 인가코드를 전달하여 사용자 정보를 받아온다.
export const getNaverUser = async (authCode) => {
  const naverUrl = await axios.get(
    `${API_SERVER_HOST}/auth/member/naver?code=${authCode}`
  );

  return naverUrl;
};
