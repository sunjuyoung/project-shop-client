import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/productApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import { useQuery } from "@tanstack/react-query";

const initState = {
  content: [],
  pageNumer: 1,
  pageSize: 10,
  totalPage: 1,
  totalElements: 0,
  first: true,
  last: false,
};
const MDRecommendations = () => {
  const { moveToList, page, size, moveToRead } = useCustomMove();

  const {
    data: mdData,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["products/mdList", { page, size }],
    queryFn: () => getProducts({ page, size }),
    staleTime: 1000 * 60,
  });

  if (isFetching) {
    return <FetchingModal />;
  }
  if (isError) {
    console.log(error);
  }

  const handleClick = (productId) => {
    moveToRead(productId);
  };

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        MD 추천 아이템
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {mdData.content.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 hover:scale-105 hover:shadow-xl"
            onClick={() => handleClick(item.id)}
          >
            <div className="bg-white">
              <img
                src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${item.mainImage[0]}`}
                alt={item.title}
                className="object-contain w-full h-56"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
              <p className="mb-2 text-gray-600">{item.price}원</p>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="mt-4">
                <span className="px-2 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full">
                  MD 추천
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MDRecommendations;
