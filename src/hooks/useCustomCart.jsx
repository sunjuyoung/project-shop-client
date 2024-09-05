import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemAsync,
  changeCartAsync,
  selectCartItem,
} from "../slice/cartSlice";
import { useMemo } from "react";

const useCustomCart = () => {
  const cartItems = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const cartTotalPrice = useMemo(() => {
    const totalPrice =
      (cartItems &&
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)) ||
      0;
    return totalPrice;
  }, [cartItems]);

  // isSelected === true 인 totalPrice
  const selectedCartTotalPrice = useMemo(() => {
    const totalPrice =
      (cartItems &&
        cartItems
          .filter((item) => item.isSelected === true)
          .reduce((acc, item) => acc + item.price * item.quantity, 0)) ||
      0;
    return totalPrice;
  }, [cartItems]);

  const refreshCart = () => {
    dispatch(getCartItemAsync());
  };

  const changeCart = (param) => {
    dispatch(changeCartAsync(param));
  };

  const selectCartItemHandle = (productId) => {
    dispatch(selectCartItem(productId));
  };

  return {
    cartItems,
    refreshCart,
    changeCart,
    cartTotalPrice,
    selectCartItemHandle,
    selectedCartTotalPrice,
  };
};

export default useCustomCart;
