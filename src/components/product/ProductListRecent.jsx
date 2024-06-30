import React, { useRef } from "react";
import Card from "./Card";

const ProductListRecent = ({ type }) => {
  const sliderRef = useRef(null);

  const data = [
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
  ];

  return (
    <div className="max-w-screen-xl px-8 mx-auto my-8">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold capitalize flex-2">{type} 상품</h1>
      </div>
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListRecent;
