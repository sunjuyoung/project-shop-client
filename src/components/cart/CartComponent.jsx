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
  const { refreshCart, changeCart, cartItems } = useCustomCart();

  useEffect(() => {
    if (isLogin) {
      refreshCart();
    }
  }, [isLogin]);

  console.log(cartItems);
  return (
    <div className="w-full space-y-4 md:w-2/3">
      {cartItems.map((item) => (
        <CartItemComponent key={item.cartItemId} item={item} />
      ))}
      {/* {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center p-4 bg-white rounded-lg shadow"
        >
          <input
            type="checkbox"
            checked="false"
            onChange={() => toggleSelect(item.id)}
            className="mr-4"
          />
          <img
            src={item.img}
            alt={item.name}
            className="object-cover w-24 h-24 mr-6"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}원</p>
            <p className="text-sm text-gray-500">
              배송비: {item.shippingFee}원
            </p>
          </div>
          <div className="flex items-center mx-4">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-2 py-1 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
          >
            X
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default CartComponent;
