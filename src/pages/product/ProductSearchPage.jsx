import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import SearchComponent from "../../components/product/SearchResultComponent";
import { useSearchParams } from "react-router-dom";

const ProductSearchPage = () => {
  //keyword query 데이터
  const [queryParams] = useSearchParams();

  const keyword = queryParams.get("keyword");

  return (
    <BasicLayout>
      <SearchComponent keyword={keyword} />
    </BasicLayout>
  );
};

export default ProductSearchPage;
