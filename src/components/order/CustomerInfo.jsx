const CustomerInfo = ({ customerInfo, setCustomerInfo }) => (
  <section className="p-6 mb-8 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-xl font-semibold">주문자 정보</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          이름
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          value={customerInfo?.nickname}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, nickname: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          전화번호
        </label>
        <input
          type="tel"
          className="w-full px-3 py-2 border rounded-md"
          value={customerInfo?.phoneNumber}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })
          }
        />
      </div>
      <div className="col-span-2">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          이메일
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          value={customerInfo?.email || ""}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, email: e.target.value })
          }
        />
      </div>
    </div>
  </section>
);

export default CustomerInfo;
