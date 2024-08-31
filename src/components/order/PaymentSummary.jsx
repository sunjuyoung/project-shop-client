const PaymentSummary = ({ subtotal, shippingFee }) => {
  const total = subtotal + shippingFee;

  return (
    <div className="sticky p-6 bg-white rounded-lg shadow-md top-8">
      <h2 className="mb-4 text-xl font-semibold">결제 요약</h2>
      <div className="mb-6 space-y-3">
        <div className="flex justify-between">
          <span>상품 금액</span>
          <span>{subtotal.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>총 결제 금액</span>
          <span>{total.toLocaleString()}원</span>
        </div>
      </div>
      <button className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
        결제하기
      </button>
    </div>
  );
};

export default PaymentSummary;
