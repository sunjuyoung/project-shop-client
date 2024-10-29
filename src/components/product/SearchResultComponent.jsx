import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getNewProducts, getProducts } from "../../api/productApi";
import SortButton from "./SortButton";
import CheckboxFilter from "./CheckboxFilter";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import PriceFilter from "./PriceFilter";
import FetchingModal from "../common/FetchingModal";
import useCategoryStore from "../../store/useCategoryStore";
import useCustomMove from "../../hooks/useCustomMove";

const SearchResultComponent = ({ keyword }) => {
  const [sortBy, setSortBy] = useState("BASIC");
  const [priceFilter, setPriceFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const categoryState = useCategoryStore((state) => state.childCategories);
  const { moveToList, page, size, moveToRead } = useCustomMove();
  const queryClient = useQueryClient();

  console.log(keyword);
  const { data, isFetching, isSuccess, isError, error } = useQuery({
    queryKey: ["searchProduct", priceFilter, sortBy, categoryFilter, keyword],
    queryFn: () =>
      getProducts({
        page,
        size,
        priceRange: priceFilter,
        orderBy: sortBy,
        categoryFilter,
        keyword: keyword,
      }),
    staleTime: 1000 * 60,
  });

  const handlePriceFilterChange = useCallback(
    (value) => {
      setPriceFilter((prev) => (prev === value ? null : value));
      queryClient.invalidateQueries(["searchProduct"]);
    },

    [queryClient]
  );

  const handleSortChange = useCallback(
    (value) => {
      setSortBy(value);
      queryClient.invalidateQueries(["searchProduct"]);
    },
    [queryClient]
  );

  const handleCategoryFilterChange = useCallback(
    (categories) => {
      setCategoryFilter(categories);
      queryClient.invalidateQueries(["searchProduct"]);
    },
    [queryClient]
  );

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (isSuccess) {
      setSearchProduct(data.content);
    }
  }, [isSuccess, setSearchProduct, data]);

  if (isFetching) {
    return <FetchingModal />;
  }

  const handleScroll = (e) => {
    // const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    // if (scrollHeight - scrollTop === clientHeight) {
    //   fetchNextPage();
    // }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-center m-8">
        <div>
          <h1 className="text-3xl font-bold">"{keyword}" 검색 결과</h1>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 pr-8">
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-bold">가격</h2>
            <PriceFilter
              label="10만원 미만"
              value="UNDER_10000"
              checked={priceFilter === "UNDER_10000"}
              onChange={handlePriceFilterChange}
            />
            <PriceFilter
              label="10만원 ~ 20만원 미만"
              value="BETWEEN_10000_AND_20000"
              checked={priceFilter === "BETWEEN_10000_AND_20000"}
              onChange={handlePriceFilterChange}
            />
            <PriceFilter
              label="20만원 ~ 30만원 미만"
              value="BETWEEN_20000_AND_30000"
              checked={priceFilter === "BETWEEN_20000_AND_30000"}
              onChange={handlePriceFilterChange}
            />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold">카테고리</h2>

            {categoryState.map((category) => (
              <CategoryFilter
                key={category.id}
                category={category}
                selected={categoryFilter}
                onChange={handleCategoryFilterChange}
              />
            ))}
          </div>
        </div>

        <div className="w-3/4" onScroll={handleScroll}>
          <div className="flex mb-8 space-x-4 ">
            <SortButton
              label="기본검색순"
              active={sortBy === "BASIC"}
              onClick={() => handleSortChange("BASIC")}
            />

            <SortButton
              label="높은 가격순"
              active={sortBy === "PRICE_HIGH"}
              onClick={() => handleSortChange("PRICE_HIGH")}
            />
            <SortButton
              label="낮은 가격순"
              active={sortBy === "PRICE_LOW"}
              onClick={() => handleSortChange("PRICE_LOW")}
            />
            <SortButton
              label="신상품순"
              active={sortBy === "NEW"}
              onClick={() => handleSortChange("NEW")}
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {searchProduct?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultComponent;
