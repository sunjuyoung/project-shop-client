import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getNewProducts } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";

const NewProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const { moveToList, page, size, moveToRead } = useCustomMove();

  const itemsPerPage = 4;

  const [newProduct, setNewProduct] = useState([]);

  const { data, isFetching, isSuccess, isError, error } = useQuery({
    queryKey: ["newProduct"],
    queryFn: () => getNewProducts(),
    staleTime: 1000 * 60,
  });

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (isSuccess) {
      setNewProduct(data);
    }
  }, [isSuccess, setNewProduct, data]);

  if (isFetching) {
    return <FetchingModal />;
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(newProduct.length - itemsPerPage, prevIndex + 1)
    );
  };

  const visibleItems = newProduct.slice(startIndex, startIndex + itemsPerPage);

  const handleClick = (id) => {
    moveToRead(id);
  };

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
              onClick={() => handleClick(item.id)}
            >
              <img
                src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${item.mainImage[0]}`}
                alt={item.name}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
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
          disabled={startIndex + itemsPerPage >= newProduct.length}
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
