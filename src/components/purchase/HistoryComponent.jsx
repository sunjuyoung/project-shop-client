import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryComponent = () => {
  const navigate = useNavigate();

  const purchaseData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "터틀넥티셔츠",
      price: 200,
      quantity: 2,
      date: "2023-06-15",
      status: "결제완료",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "여름 셔츠",
      price: 150,
      quantity: 1,
      date: "2023-06-20",
      status: "배송중",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "캐주얼 셔츠",
      price: 300,
      quantity: 1,
      date: "2023-06-15",
      status: "배송완료",
    },
    // Add more purchase data as needed
  ];

  // Group purchases by date
  const groupedPurchases = purchaseData.reduce((acc, purchase) => {
    const date = purchase.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(purchase);
    return acc;
  }, {});

  return (
    <div className="px-12 py-5">
      <h1 className="mb-8 text-2xl font-bold">구매 내역</h1>
      {Object.entries(groupedPurchases).map(([date, items]) => (
        <div key={date} className="mb-10">
          <h2 className="mb-5 text-xl font-semibold">{date}</h2>
          <div className="flex flex-col gap-5 purchase-history">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 p-5 border rounded-lg shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover cursor-pointer w-36 h-36"
                  onClick={() => navigate(`/product/${item.id}`)}
                />
                <div className="flex flex-col flex-1">
                  <h2 className="text-xl font-medium">{item.title}</h2>
                  <p className="text-gray-600">구매 날짜: {item.date}</p>
                  <p className="text-gray-600">가격: ₩{item.price}</p>
                  <p className="text-gray-600">수량: {item.quantity}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <span className={`order-status ${item.status}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryComponent;
