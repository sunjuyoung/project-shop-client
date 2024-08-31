const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => (
  <section className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-xl font-semibold">결제 수단</h2>
    <div className="space-y-4">
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
          className="form-radio"
        />
        <span>신용카드</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="paymentMethod"
          value="bank"
          checked={paymentMethod === "bank"}
          onChange={() => setPaymentMethod("bank")}
          className="form-radio"
        />
        <span>무통장입금</span>
      </label>
    </div>
  </section>
);

export default PaymentMethod;
