const ShippingInfo = () => (
  <section className="p-6 mb-8 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-xl font-semibold">배송지 정보</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          주소
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 mb-2 border rounded-md"
          placeholder="기본 주소"
        />
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="상세 주소"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          받는 사람
        </label>
        <input type="text" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          연락처
        </label>
        <input type="tel" className="w-full px-3 py-2 border rounded-md" />
      </div>
    </div>
  </section>
);

export default ShippingInfo;
