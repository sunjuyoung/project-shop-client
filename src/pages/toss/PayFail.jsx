import React, { useEffect, useState } from "react";

const PayFail = () => {
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setErrorCode(urlParams.get("code"));
    setErrorMessage(urlParams.get("message"));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <img
          src="https://static.toss.im/lotties/error-spot-no-loop-space-apng.png"
          alt="Error"
          className="w-24 mx-auto"
        />
        <h2 className="mt-4 text-2xl font-bold text-center">
          결제를 실패했어요
        </h2>

        <div className="mt-8">
          <div className="flex justify-between">
            <span className="font-bold">에러메시지</span>
            <span>{errorMessage}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">에러코드</span>
            <span>{errorCode}</span>
          </div>
        </div>

        <div className="flex mt-8 space-x-4">
          <button
            className="w-1/2 py-2 text-white bg-blue-600 rounded-md"
            onClick={() =>
              (window.location.href =
                "https://docs.tosspayments.com/guides/payment/integration")
            }
          >
            연동 문서
          </button>
          <button
            className="w-1/2 py-2 text-blue-700 bg-blue-100 rounded-md"
            onClick={() =>
              (window.location.href = "https://discord.gg/A4fRFXQhRu")
            }
          >
            실시간 문의
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayFail;
