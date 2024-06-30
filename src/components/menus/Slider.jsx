import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      img: "/img/slide1.jpg",
    },
    {
      id: 2,
      img: "/img/slide2.jpg",
    },
    {
      id: 3,
      img: "/img/slide3.jpg",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="relative w-screen h-[calc(90vh-80px)] overflow-hidden mx-auto">
      <div
        className="flex w-[300vw] h-[70vh] transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <img
            src={item.img}
            alt=""
            key={item.id}
            className="w-screen h-[70vh] object-cover"
          />
        ))}
      </div>
      <div className="absolute flex justify-between w-full px-10 transform -translate-y-1/2 top-1/2">
        <div
          className="flex items-center justify-center w-12 h-12 bg-white border border-gray-400 cursor-pointer"
          onClick={prevSlide}
        >
          <ArrowBackOutlinedIcon />
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 bg-white border border-gray-400 cursor-pointer"
          onClick={nextSlide}
        >
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
