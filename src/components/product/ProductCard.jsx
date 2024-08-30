import React from "react";
import { ChevronDown, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img
        src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${product.mainImage[0]}`}
        alt={product.name}
        className="object-contain w-full h-48"
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 mr-1 text-yellow-400" />
          <span className="text-sm text-gray-600"> 리뷰</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            {product.price.toLocaleString()}원
          </span>
          {product.discountRate > 0 && (
            <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">
              {product.discountRate}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
