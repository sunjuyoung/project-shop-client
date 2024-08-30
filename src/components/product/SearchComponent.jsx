import React, { useState, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import StarRating from "../ui/StarRating";
import FetchingModal from "../common/FetchingModal";
import { getProducts } from "../../api/productApi";

const SearchComponent = () => {
  const [sortOption, setSortOption] = useState("lowPrice");
  const [filter, setFilter] = useState({ priceRange: "", category: [] });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["products", sortOption, filter],
    queryFn: () => getProducts(),
    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60,
  });
  const observerRef = useRef();

  useEffect(() => {
    if (status === "success") {
      console.log(data.pages[0].content);
    }

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };
  const handlePriceChange = (e) => {
    const { value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceRange: value,
    }));
  };

  const handleTopCategoryChange = (e) => {
    const { checked } = e.target;
    const subCategories = ["jeans", "slacks"];
    setFilter((prevFilter) => {
      let newCategories;
      if (checked) {
        newCategories = [
          ...new Set([...prevFilter.category, ...subCategories]),
        ];
      } else {
        newCategories = prevFilter.category.filter(
          (cat) => !subCategories.includes(cat)
        );
      }
      return { ...prevFilter, category: newCategories };
    });
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    const categoryValue = name.split("-")[1];
    setFilter((prevFilter) => {
      const newCategories = checked
        ? [...prevFilter.category, categoryValue]
        : prevFilter.category.filter((cat) => cat !== categoryValue);
      return { ...prevFilter, category: newCategories };
    });
  };

  const isSubCategoryChecked = (subCategory) => {
    return filter.category.includes(subCategory);
  };

  if (status === "pending") return <FetchingModal />;
  if (status === "error") return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div className="flex">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-4 bg-gray-100">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">필터</h3>
        <div className="mb-6">
          <h4 className="mb-2 font-semibold text-gray-600">가격 범위</h4>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                value="under100"
                className="mr-2"
                onChange={handlePriceChange}
              />
              10만원 미만
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                value="100to200"
                className="mr-2"
                onChange={handlePriceChange}
              />
              10만원~20만원 미만
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="priceRange"
                value="200to300"
                className="mr-2"
                onChange={handlePriceChange}
              />
              20만원~30만원 미만
            </label>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="mb-2 font-semibold text-gray-600">카테고리</h4>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                name="category-top"
                className="mr-2"
                onChange={handleTopCategoryChange}
                checked={["jeans", "slacks"].every(isSubCategoryChecked)}
              />
              상의
            </label>
            <label className="flex items-center mb-2 ml-4">
              <input
                type="checkbox"
                name="category-jeans"
                className="mr-2"
                onChange={handleCategoryChange}
                checked={isSubCategoryChecked("jeans")}
              />
              하의 - 청바지
            </label>
            <label className="flex items-center mb-2 ml-4">
              <input
                type="checkbox"
                name="category-slacks"
                className="mr-2"
                onChange={handleCategoryChange}
                checked={isSubCategoryChecked("slacks")}
              />
              하의 - 슬랙스
            </label>
          </div>
        </div>
      </aside>

      {/* Product Listing */}
      <main className="w-3/4 p-4">
        <div className="flex mb-4 space-x-4">
          <button
            className={`p-2 ${
              sortOption === "lowPrice"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleSortChange("lowPrice")}
          >
            낮은 가격순
          </button>
          <button
            className={`p-2 ${
              sortOption === "highPrice"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleSortChange("highPrice")}
          >
            높은 가격순
          </button>
          <button
            className={`p-2 ${
              sortOption === "newest" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSortChange("newest")}
          >
            신상품순
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.products.map((item) => (
              <div key={item.id} className="p-2">
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
          </React.Fragment>
        ))} */}
        </div>
        {isFetchingNextPage && <p>추가 로딩 중...</p>}
      </main>
    </div>
  );
};

export default SearchComponent;
