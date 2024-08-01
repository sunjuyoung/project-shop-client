import React from "react";
import { useNavigate } from "react-router-dom";

const MDRecommendations = () => {
  const navigate = useNavigate();
  const mdRecommendations = [
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
  ];

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        MD 추천 아이템
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {mdRecommendations.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 hover:scale-105 hover:shadow-xl"
            onClick={() => handleClick(item.id)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="mb-2 text-gray-600">{item.price}원</p>
              <p className="text-sm text-gray-500">설명란</p>
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
