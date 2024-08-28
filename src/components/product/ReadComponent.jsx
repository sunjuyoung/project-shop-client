import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";
import useCustomCart from "../../hooks/useCustomCart";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useQuery } from "@tanstack/react-query";

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

  const data = {
    id: 1,

    oldPrice: 300,
    price: 200,
    isNew: true,
    per: 10,
  };

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
    <div className="flex gap-12 px-12 py-5 product">
      <div className="flex flex-1 gap-5 left">
        {/* <div className="flex-1 images">
          {product.productImages.map((img, index) => (
            <img
              key={index}
              src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${img.fileName}`}
              alt=""
              onClick={() => setSelectedImg(index)}
              className="w-full h-36 object-cover cursor-pointer mb-2.5"
            />
          ))}
        </div> */}
        <div className="mainImg flex-5">
          <img
            src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${product.productImages[selectedImg]?.fileName}`}
            alt=""
            className="object-cover w-full max-h-200"
          />
          <div className="flex gap-2 mt-4 thumbnails">
            {product.productImages.map((img, index) => (
              <img
                key={index}
                src={`https://shop-syseoz.s3.ap-northeast-2.amazonaws.com/${img.fileName}`}
                alt=""
                onClick={() => setSelectedImg(index)}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  selectedImg === index ? "border-2 border-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="right flex-1 flex flex-col gap-7.5">
        <h1>{product.name}</h1>
        <hr />

        <div className="pCode_rCount text-base font-medium flex gap-2.5">
          <span>상품 코드 : </span>
          <span className="code">MD399</span>
          <span className="rCount">21건</span>
        </div>
        <div className="price text-base font-medium flex gap-2.5">
          <span>판매가격 :</span>
          <span className="price">{product.price}</span>
        </div>

        <p>{data?.attributes?.desc}</p>
        <div className="quantity flex items-center gap-2.5">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            className="flex items-center justify-center w-12 h-12 border-none cursor-pointer"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="flex items-center justify-center w-12 h-12 border-none cursor-pointer"
          >
            +
          </button>
        </div>
        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal">
            <div className="p-6 bg-white rounded-lg shadow-lg w-96">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">장바구니</h2>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              <div className="mb-4 text-center">상품이 카트에 담겼습니다.</div>
              <div className="flex justify-between">
                <button
                  onClick={() => navigate(`/cart/${loginState.id}`)}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  장바구니로 이동
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                >
                  계속 쇼핑하기
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleAddCart}
          className="add w-62.5 p-2.5 bg-blue-500 text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="flex gap-5 links">
          <div className="item flex items-center gap-2.5 text-sm">
            <FavoriteOutlinedIcon style={{ color: "red" }} /> ADD TO WISH LIST
          </div>
        </div>
        <div className="info flex flex-col gap-2.5 text-gray-400 text-sm mt-7.5">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info flex flex-col gap-2.5 text-gray-400 text-sm mt-7.5">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default ReadComponent;
