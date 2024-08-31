import OrderItem from "./OrderItem";

const OrderSummary = ({ orderItems }) => {
  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">주문 상세 내역</h2>
      {orderItems.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default OrderSummary;
