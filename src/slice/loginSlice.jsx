import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/userApi";
import { setCookie, getCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadUserCookie = () => {
  const userInfo = getCookie("userInfo");
  if (userInfo) {
    userInfo.nickname = decodeURIComponent(userInfo.nickname);
  }
  return userInfo;
};

//createAsyncThunk() 기능을 사용해서 비동기 통신 상태에따른 처리가 가능합니다.
//fullfilled 완료, rejected 에러, pending 처리중 에 따라 동작하는 함수가 있습니다.
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadUserCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("login..");
      const data = action.payload;
      //쿠키에는 문자열만 들어갈 수 있기때문에
      setCookie("userInfo", JSON.stringify(data), 1);
      return data;
    },
    logout: (state, action) => {
      console.log("logout..");
      removeCookie("userInfo");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        const payload = action.payload;
        if (!payload.error) {
          setCookie("userInfo", JSON.stringify(payload), 1);
        }
        return payload;
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
