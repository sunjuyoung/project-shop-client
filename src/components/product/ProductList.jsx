import React, { useRef } from "react";
import Card from "./Card";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const ProductList = ({ type }) => {
  const sliderRef = useRef(null);
  const cardWidth = 280 + 16; // 카드 너비 (280px) + 마진 (16px)

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
    {
      id: 5,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "etc",
      oldPrice: 300,
      price: 200,
      per: 10,
      isNew: true,
    },
  ];
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= cardWidth;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += cardWidth;
  };
  return (
    <div className="max-w-screen-xl px-8 mx-auto my-8">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-2xl font-bold capitalize flex-2">{type} 상품</h1>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 z-10 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md top-1/2"
          onClick={scrollLeft}
        >
          <ArrowBackOutlinedIcon />
        </button>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 transform translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md top-1/2"
          onClick={scrollRight}
        >
          <ArrowForwardOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
