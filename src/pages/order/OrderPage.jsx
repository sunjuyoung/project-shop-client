import { useState } from "react";
import CustomerInfo from "../../components/order/CustomerInfo";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentMethod from "../../components/order/PaymentMethod";
import PaymentSummary from "../../components/order/PaymentSummary";
import ShippingInfo from "../../components/order/ShippingInfo";
import BasicLayout from "../../layouts/BasicLayout";

const OrderPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  // 샘플 주문 데이터
  const orderItems = [
    {
      id: 1,
      name: "프리미엄 데님 진",
      price: 89000,
      quantity: 2,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "캐주얼 티셔츠",
      price: 29000,
      quantity: 1,
      image: "/api/placeholder/80/80",
    },
  ];

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 3000;

  return (
    <BasicLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">주문/결제</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-2/3">
            <OrderSummary orderItems={orderItems} />
            <CustomerInfo />
            <ShippingInfo />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="lg:w-1/3">
            <PaymentSummary subtotal={subtotal} shippingFee={shippingFee} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default OrderPage;
