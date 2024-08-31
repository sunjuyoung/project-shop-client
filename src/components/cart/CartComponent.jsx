import React, { useEffect } from "react";
import useCartStore from "../../store/useCartStore";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useDispatch, useSelector } from "react-redux";
import useCustomCart from "../../hooks/useCustomCart";
import CartItemComponent from "./CartItemComponent";

const CartComponent = () => {
  // const { cartItems, removeFromCart, updateQuantity, toggleSelect } =
  //   useCartStore();

  const { isLogin, loginState } = useCustomLogin();
  const { refreshCart, changeCart, cartItems, cartTotalPrice } =
    useCustomCart();

  useEffect(() => {
    if (isLogin) {
      refreshCart();
    }
  }, [isLogin]);

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="w-full space-y-4 md:w-2/3">
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.cartItemId}
            {...item}
            changeCart={changeCart}
            email={loginState.email}
            userId={loginState.id}
          />
        ))}
      </div>
      <div className="sticky w-full p-6 bg-gray-100 rounded-lg shadow-md md:w-1/4 h-fit top-6">
        <h2 className="mb-4 text-xl font-semibold">주문 요약</h2>
        <p className="mb-4">총 상품 가격: {cartTotalPrice}원</p>
        <button className="w-full px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
