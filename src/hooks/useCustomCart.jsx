import { useDispatch, useSelector } from "react-redux";
import { getCartItemAsync, changeCartAsync } from "../slice/cartSlice";

const useCustomCart = () => {
  const cartItems = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

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
  };
};

export default useCustomCart;
