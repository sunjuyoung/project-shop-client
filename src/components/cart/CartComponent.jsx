import { useEffect } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomCart from "../../hooks/useCustomCart";
import CartItemComponent from "./CartItemComponent";

const CartComponent = () => {
  // const { cartItems, removeFromCart, updateQuantity, toggleSelect } =
  //   useCartStore();

  const { isLogin, loginState, moveToPath } = useCustomLogin();
  const {
    refreshCart,
    changeCart,
    cartItems,
    cartTotalPrice,
    selectCartItemHandle,
  } = useCustomCart();

  useEffect(() => {
    if (isLogin) {
      refreshCart();
    }
  }, [isLogin]);

  const handleOrder = () => {
    if (!isLogin) {
      alert("로그인하고 주문 가능합니다");
      return;
    }

    const selectedItems = cartItems.filter((item) => item.isSelected === true);

    if (selectedItems.length === 0) {
      alert("주문할 상품를 선택해주세요");
      return;
    }

    moveToPath("/order");
  };

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="w-full space-y-4 md:w-2/3">
        <div className="flex items-center px-4 py-2 font-bold text-gray-700 bg-gray-100 border-b">
          <div className="w-1/3">상품정보</div>
          <div className="w-1/6 text-center">수량</div>
          <div className="w-1/6 text-center">상품금액</div>
          <div className="w-1/6 text-center">합계금액</div>
          <div className="w-1/6 text-center">배송비</div>
        </div>
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.cartItemId}
            {...item}
            changeCart={changeCart}
            selectCartItem={selectCartItemHandle}
            email={loginState.email}
            userId={loginState.id}
          />
        ))}
      </div>
      <div className="sticky w-full p-6 bg-gray-100 rounded-lg shadow-md md:w-1/4 h-fit top-6">
        <h2 className="mb-4 text-xl font-semibold">주문 요약</h2>
        <p className="mb-4">총 상품 가격: {cartTotalPrice}원</p>
        <button
          className="w-full px-4 py-2 text-white transition duration-300 bg-black rounded hover:bg-gray-600"
          onClick={() => handleOrder()}
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
