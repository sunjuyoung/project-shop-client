import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (key, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days);
  return cookie.set(key, value, { path: "/", expires });
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const removeCookie = (key) => {
  return cookie.remove(key, { path: "/" });
};
