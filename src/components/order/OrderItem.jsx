const OrderItem = ({ item }) => {
  const productImage = `https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${item.imageUrl}`;

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={productImage}
        alt={item.productName}
        className="object-cover w-20 h-20 mr-4 rounded"
      />
      <div className="flex-grow">
        <h3 className="font-medium">{item.productName}</h3>
        <p className="text-gray-600">수량: {item.quantity}</p>
      </div>
      <p className="font-semibold">
        {(item.price * item.quantity).toLocaleString()}원
      </p>
    </div>
  );
};

export default OrderItem;
