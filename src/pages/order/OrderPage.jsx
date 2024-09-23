import { useEffect, useState } from "react";
import CustomerInfo from "../../components/order/CustomerInfo";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentMethod from "../../components/order/PaymentMethod";
import PaymentSummary from "../../components/order/PaymentSummary";
import ShippingInfo from "../../components/order/ShippingInfo";
import BasicLayout from "../../layouts/BasicLayout";
import useCustomCart from "../../hooks/useCustomCart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCustomerProfile } from "../../api/customerApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import FetchingModal from "../../components/common/FetchingModal";
import { saveOrder } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [customerInfo, setCustomerInfo] = useState(null);
  const { cartItems, selectCartItemHandle, selectedCartTotalPrice } =
    useCustomCart();
  const orderItems = cartItems.filter((item) => item.isSelected === true);
  const shippingFee = 3000;
  const { loginState } = useCustomLogin();
  const navigate = useNavigate();

  const addMutation = useMutation({
    mutationFn: (data) => saveOrder(data),

    onSuccess: (res) => {
      console.log(res);
      navigate(
        `/widget/checkout?data=${encodeURIComponent(JSON.stringify(res.data))}`
      );
    },
  });

  const {
    data: customerProfile,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["customerProfile", loginState.id],
    queryFn: () => getCustomerProfile(loginState.id),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess) {
      setCustomerInfo(customerProfile.data);
    }
  }, [isSuccess, setCustomerInfo, customerProfile]);

  if (isFetching) {
    return <FetchingModal />;
  }
  if (isError) {
    console.log(error);
  }

  const handlePayment = () => {
    // console.log(customerInfo);
    // console.log(orderItems);
    addMutation.mutate({
      customerId: customerInfo.id,
      orderItemDTOS: orderItems,
      receiverName: customerInfo.receiverName,
      receiverPhone: customerInfo.receiverPhone,
      city: customerInfo.city,
      street: customerInfo.street,
      postCode: customerInfo.postCode,
    });
  };

  return (
    <BasicLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">주문/결제</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-2/3">
            <OrderSummary orderItems={orderItems} />
            <CustomerInfo
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
            <ShippingInfo
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="lg:w-1/3">
            <PaymentSummary
              subtotal={selectedCartTotalPrice}
              shippingFee={shippingFee}
              onClick={handlePayment}
            />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default OrderPage;
