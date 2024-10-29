const CartItemComponent = ({
  cartItemId,
  productId,
  productName,
  imageUrl,
  price,
  quantity,
  isSelected,
  email,
  userId,
  changeCart,
  selectCartItem,
}) => {
  const productImage = `https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${imageUrl}`;

  const handleCheckboxChange = () => {
    selectCartItem(productId);
  };

  const handleClickQty = (amount) => {
    changeCart({
      cartItemId: cartItemId,
      quantity: quantity + amount,
      email: email,
      customerId: userId,
    });
  };

  const totalPrice = price * quantity;

  return (
    <div key={cartItemId} className="flex items-center px-4 py-2 border-b">
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="mr-4"
      />

      {/* 상품정보 */}
      <div className="flex items-center w-1/3">
        <img
          src={productImage}
          alt={productName}
          className="object-cover w-16 h-16 mr-4"
        />
        <div>
          <h3 className="text-base font-semibold">{productName}</h3>
        </div>
      </div>

      {/* 수량 */}
      <div className="flex items-center justify-center w-1/6">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => handleClickQty(-1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => handleClickQty(1)}
        >
          +
        </button>
      </div>

      {/* 상품금액 */}
      <div className="w-1/6 text-center">{price.toLocaleString()}원</div>

      {/* 합계금액 */}
      <div className="w-1/6 text-center">{totalPrice.toLocaleString()}원</div>

      {/* 배송비 */}
      <div className="w-1/6 text-center">
        {price >= 50000 ? "무료" : "3,000원"}
      </div>
    </div>
  );
};

export default CartItemComponent;
