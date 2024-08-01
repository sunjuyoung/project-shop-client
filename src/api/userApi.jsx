import axios from "axios";
import { API_SERVER_HOST } from "./rootApi";

const host = `${API_SERVER_HOST}/auth`;

//createAsyncThunk() 기능을 사용해서 비동기 통신 상태에따른 처리가 가능합니다.

export const loginPost = async (loginParam) => {
  //const header = { headers: { "Content-Type": "application/json" } };

  const form = new FormData();
  form.append("email", loginParam.email);
  form.append("password", loginParam.password);

  const res = await axios.post(`${host}/login`, form);

  return res.data;
};
