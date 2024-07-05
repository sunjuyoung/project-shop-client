import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import useCartStore from "../../store/useCartStore";

const IndexComponent = () => {
  const { cart, removeFromCart, clearCart, incrementItem, decrementItem } =
    useCartStore((state) => ({
      cart: state.cart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
      incrementItem: state.incrementItem,
      decrementItem: state.decrementItem,
    }));

  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  return (
    <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-8 text-2xl font-semibold text-gray-700">장바구니</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg"
            key={item.id}
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-20 h-20 rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-medium text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500">
                {item.desc ? item.desc.substring(0, 100) : ""}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="px-3 py-1 text-lg font-semibold text-white bg-gray-700 rounded-full"
                >
                  -
                </button>
                <span className="px-3 py-1 text-lg font-semibold text-gray-700 bg-white border rounded-full">
                  {item.quantity}
                </span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="px-3 py-1 text-lg font-semibold text-white bg-gray-700 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-gray-800">
                {item.quantity * item.price}원
              </span>
              <DeleteOutlinedIcon
                className="text-2xl text-red-500 cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-500">장바구니가 비어 있습니다.</p>
      )}
      <div className="flex items-center justify-between p-4 mt-8 bg-gray-100 rounded-lg">
        <span className="text-lg font-semibold text-gray-800">SUBTOTAL</span>
        <span className="text-lg font-semibold text-gray-800">
          {totalPrice()}원
        </span>
      </div>
      <button className="w-full py-3 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        PROCEED TO CHECKOUT
      </button>
      <button
        className="w-full py-3 mt-2 text-lg font-semibold text-gray-800 bg-white border rounded-lg hover:bg-gray-100"
        onClick={() => clearCart()}
      >
        Reset Cart
      </button>
    </div>
  );
};

export default IndexComponent;
