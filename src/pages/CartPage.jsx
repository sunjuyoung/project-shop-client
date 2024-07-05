import React from "react";
import CartComponent from "../components/cart/CartComponent";
import useCartStore from "../store/useCartStore";

const CartPage = () => {
  const { cartItems, totalPrice } = useCartStore();

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold">장바구니</h1>
      <div className="flex flex-col justify-between md:flex-row">
        <CartComponent />
        <div className="sticky w-full p-6 bg-gray-100 rounded-lg shadow-md md:w-1/4 h-fit top-6">
          <h2 className="mb-4 text-xl font-semibold">주문 요약</h2>
          <p className="mb-4">총 상품 가격: {totalPrice}원</p>
          <button className="w-full px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700">
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
