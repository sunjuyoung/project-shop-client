import { useDispatch, useSelector } from "react-redux";
import { getCartItemAsync, changeCartAsync } from "../slice/cartSlice";
import { useMemo } from "react";

const useCustomCart = () => {
  const cartItems = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const refreshCart = () => {
    dispatch(getCartItemAsync());
  };

  const changeCart = (param) => {
    dispatch(changeCartAsync(param));
  };

  return {
    cartItems,
    refreshCart,
    changeCart,
    cartTotalPrice,
  };
};

export default useCustomCart;
