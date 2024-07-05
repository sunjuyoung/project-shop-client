import React, { useState } from "react";

const NewProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const newItems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "inner",
      oldPrice: 300,
      price: 200,
      per: 10,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "outer",
      oldPrice: 300,
      price: 200,
      per: 10,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "bottom",
      oldPrice: 300,
      price: 200,
      per: 10,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "etc",
      oldPrice: 300,
      price: 200,
      per: 10,
      isNew: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "etc",
      oldPrice: 300,
      price: 200,
      per: 10,
      isNew: true,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "etc",
      oldPrice: 300,
      price: 200,
      per: 10,
      isNew: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "etc",
      oldPrice: 300,
      price: 200,
      per: 10,
      isNew: true,
    },
  ];
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(newItems.length - itemsPerPage, prevIndex + 1)
    );
  };

  const visibleItems = newItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        새로운 아이템
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 focus:outline-none"
          disabled={startIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex justify-between px-10 space-x-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="w-64 overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.price}원</p>
                <div className="mt-2">
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    New
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 focus:outline-none"
          disabled={startIndex + itemsPerPage >= newItems.length}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewProducts;
