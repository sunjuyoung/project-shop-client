import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRating from "../ui/StarRating";

const TrendingItems = () => {
  const trendingItems = [
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        실시간 급상승 아이템
      </h2>
      <Slider {...settings}>
        {trendingItems.map((item) => (
          <div key={item.id} className="px-2">
            <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex flex-col items-end">
                    <StarRating rating={item.rating} />
                    <span className="text-xs text-gray-500">
                      ({item.reviewCount || 0})
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{item.price}원</p>
                <div className="flex items-center mt-2">
                  <span className="mr-1 text-red-500">↑</span>
                  <span className="text-sm text-red-500">급상승</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrendingItems;
