import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartItems, postChangeCart } from "../api/cartApi";

//createAsyncThunk 구성하고 비동기 호출의 상태에 따른 결과를 처리할수있다.
export const getCartItemAsync = createAsyncThunk("getCartItemAsync", () => {
  console.log("getCartItemAsync");
  return getCartItems();
});

export const changeCartAsync = createAsyncThunk("changeCartAsync", (param) => {
  console.log("changeCartAsync");
  return postChangeCart(param);
});

//초기상태는 빈배열
const initState = [];

//로그인을 한 순간 서버로부터 현재사용자의 장바구니 아이텡을 가져온다.
//상대적으로 덜 중요하다고 판단되면 쿠키에 보과내도 된다 (최근에 본 상품목록 등..)
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initState,

  reducers: {
    selectCartItem(state, action) {
      const productId = action.payload;
      return state.map((item) =>
        item.productId === productId
          ? { ...item, isSelected: !item.isSelected }
          : item
      );
    },

    unselectCartItem(state, action) {
      const productId = action.payload;
      return state.map((item) =>
        item.id === productId ? { ...item, isSelected: false } : item
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartItemAsync.fulfilled, (state, action) => {
        console.log("getCartItemAsync.fulfilled");
        return action.payload.map((item) => ({
          ...item,
          isSelected: false, // 추가된 각 상품의 초기값으로 isSelected를 false로 설정
        }));
      })
      .addCase(changeCartAsync.fulfilled, (state, action) => {
        console.log("changeCartAsync.fulfilled");
        return action.payload.map((item) => ({
          ...item,
          isSelected: false, // 추가된 각 상품의 초기값으로 isSelected를 false로 설정
        }));
      });
  },
});

export const { selectCartItem, unselectCartItem } = cartSlice.actions;

export default cartSlice.reducer;
