import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";
import useCustomCart from "../../hooks/useCustomCart";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const initState = {
  id: 0,
  name: "",
  productImages: [],
  price: 0,
  description: "",
  stockQuantity: 0,
  categoryName: "",
};

const ReadComponent = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { changeCart, cartItems } = useCustomCart();
  const { loginState, isLogin } = useCustomLogin();

  const {
    data: product,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 10,
  });

  if (isFetching) {
    return <FetchingModal />;
  }

  const handleAddCart = () => {
    if (!isLogin) {
      navigate("/login");
    }
    let qty = 1;

    const addedItem = cartItems.filter(
      (item) => item.productId === parseInt(id)
    )[0];

    if (addedItem) {
      if (
        window.confirm("이미 장바구니에 담긴 상품입니다. 추가하시겠습니까?") ===
        false
      ) {
        return;
      }
      qty = addedItem.quantity + 1;
    }

    changeCart({
      productId: parseInt(id),
      quantity: qty,
      email: loginState.email,
      customerId: loginState.id,
    });

    setOpenModal(true);
  };

  return (
    <div className="container grid grid-cols-1 gap-8 p-6 mx-auto md:grid-cols-2">
      {/* Left Section */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="overflow-hidden border rounded-lg">
          <img
            src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${product.productImages[selectedImg]?.fileName}`}
            alt={product.name}
            className="object-cover w-full h-96"
          />
        </div>
        {/* Thumbnails */}
        <div className="flex space-x-2 overflow-x-auto">
          {product.productImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImg(index)}
              className={`border ${
                selectedImg === index ? "border-blue-500" : "border-transparent"
              } rounded-lg overflow-hidden`}
            >
              <img
                src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${img.fileName}`}
                alt=""
                className="object-cover w-24 h-24"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {/* Product Title */}
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Product Info */}
        <div className="space-y-2 text-gray-600">
          <p>
            상품 코드: <span className="text-gray-800">MD399</span>
          </p>
          <p>
            리뷰 수: <span className="text-gray-800">21건</span>
          </p>
        </div>

        {/* Price */}
        <div className="text-2xl font-semibold text-blue-600">
          ₩ {product.price.toLocaleString()}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4">
          <span className="font-medium">수량:</span>
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddCart}
            className="w-1/2"
          >
            장바구니에 담기
          </Button>
          <IconButton color="secondary">
            <FavoriteOutlinedIcon />
          </IconButton>
        </div>

        {/* Product Details */}
        <div className="space-y-2 text-gray-700">
          <h2 className="text-xl font-semibold">상품 설명</h2>
          <p>{product.description}</p>
        </div>

        {/* Vendor Info */}
        <div className="space-y-1 text-gray-600">
          <p>
            판매자: <span className="text-gray-800">Polo</span>
          </p>
          <p>
            상품 유형: <span className="text-gray-800">T-Shirt</span>
          </p>
          <p>
            태그: <span className="text-gray-800">T-Shirt, Women, Top</span>
          </p>
        </div>
      </div>

      {/* Cart Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>장바구니</DialogTitle>
        <DialogContent>
          <p>상품이 장바구니에 담겼습니다.</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate(`/cart/${loginState.id}`)}
            color="primary"
          >
            장바구니로 이동
          </Button>
          <Button onClick={() => setOpenModal(false)} color="secondary">
            계속 쇼핑하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReadComponent;
