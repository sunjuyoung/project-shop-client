import React from "react";
import CartComponent from "../components/cart/CartComponent";
import useCartStore from "../store/useCartStore";

const CartPage = () => {
  const { cartItems, totalPrice } = useCartStore();

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold">장바구니</h1>

      <CartComponent />
    </div>
  );
};

export default CartPage;
