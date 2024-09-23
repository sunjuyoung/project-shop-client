import { useEffect, useState } from "react";

const ShippingInfo = ({ customerInfo, setCustomerInfo }) => {
  const [postcode, setPostcode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        let roadAddr = data.roadAddress;
        let extraRoadAddr = "";

        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr +=
            extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }

        setPostcode(data.zonecode);
        setRoadAddress(roadAddr);

        setCustomerInfo({
          ...customerInfo,
          postCode: data.zonecode,
          street: roadAddr,
          city: extraRoadAddr,
        });
      },
    }).open();
  };

  return (
    <section className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">배송지 정보</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* 주소 입력 */}
        <div className="col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            주소
          </label>
          <div className="flex mb-2">
            <input
              type="text"
              className="w-2/3 px-3 py-2 border rounded-md"
              placeholder="우편번호"
              value={postcode}
              readOnly
            />
            <button
              className="w-1/3 px-3 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handlePostcode}
            >
              우편번호 찾기
            </button>
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded-md"
            placeholder="도로명주소"
            value={roadAddress}
            readOnly
          />
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="상세주소"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, city: e.target.value })
            }
          />
        </div>

        {/* 받는 사람 입력 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            받는 사람
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={customerInfo?.receiverName || ""}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, receiverName: e.target.value })
            }
          />
        </div>

        {/* 연락처 입력 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            연락처
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border rounded-md"
            value={customerInfo?.receiverPhone || ""}
            onChange={(e) =>
              setCustomerInfo({
                ...customerInfo,
                receiverPhone: e.target.value,
              })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
