import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="no-underline">
      <div className="flex flex-col gap-2 mb-12 w-72">
        <div className="relative w-full overflow-hidden h-96 group">
          {item.isNew && (
            <span className="absolute z-10 px-2 py-1 text-xs font-medium text-teal-500 bg-white top-1 left-1">
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt=""
            className="absolute z-0 object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={item.img2}
            alt=""
            className="absolute z-10 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
        <div className="flex items-baseline gap-2">
          <h3 className="text-sm font-semibold text-red-500">{`${item.per}% `}</h3>
          <h3 className="text-xl font-semibold text-black-500">{`${item.price}원`}</h3>
          {/* <h3 className="text-sm font-medium text-gray-500 line-through">{`$${item.oldPrice}`}</h3> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
