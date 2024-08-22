import { useState } from "react";

const CartItemComponent = ({ item }) => {
  const imageUrl = `https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${item.imageUrl}`;
  const [isChecked, setIsChecked] = useState(item.selected || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // 여기서 체크박스 상태 변경 시 필요한 추가 작업을 수행할 수 있습니다.
    // 예를 들어, Redux 상태를 업데이트하거나 API 호출 등을 할 수 있습니다.
  };

  return (
    <div>
      <div
        key={item.cartItemId}
        className="flex items-center p-4 bg-white rounded-lg shadow"
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-4"
        />
        <img
          src={imageUrl}
          alt={item.productName}
          className="object-cover w-24 h-24 mr-6"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{item.productName}</h3>
          <p className="text-gray-600">{item.price}원</p>
          <p className="text-sm text-gray-500">배송비: {item.price}원</p>
        </div>
        <div className="flex items-center mx-4">
          <button className="px-2 py-1 bg-gray-200 rounded">-</button>
          <span className="mx-2">{item.quantity}</span>
          <button className="px-2 py-1 bg-gray-200 rounded">+</button>
        </div>
        <button className="px-2 py-1 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600">
          X
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;
