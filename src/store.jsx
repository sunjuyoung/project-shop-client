import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import cartSlice from "./slice/cartSlice";

export default configureStore({
  reducer: {
    loginSlice: loginSlice,
    cartSlice: cartSlice,
  },
});
