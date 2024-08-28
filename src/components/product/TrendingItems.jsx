import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRating from "../ui/StarRating";
import { useQuery } from "@tanstack/react-query";
import { getTrendProducts } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";

const TrendingItems = () => {
  const [trendProduct, setTrendProduct] = useState([]);

  const { data, isFetching, isSuccess, isError, error } = useQuery({
    queryKey: ["trendProduct"],
    queryFn: () => getTrendProducts(),
    staleTime: 1000 * 60,
  });

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (isSuccess) {
      setTrendProduct(data);
    }
  }, [isSuccess, setTrendProduct, data]);

  if (isFetching) {
    return <FetchingModal />;
  }

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
        {trendProduct.map((item) => (
          <div key={item.id} className="px-2">
            <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
              <img
                src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${item.mainImage[0]}`}
                alt={item.name}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex flex-col items-end">
                    <StarRating rating={item.discountRate} />
                    <span className="text-xs text-gray-500">
                      ({item.discountRate || 0})
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
