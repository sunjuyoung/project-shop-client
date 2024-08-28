import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import ReadComponent from "../components/product/ReadComponent";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <BasicLayout>
      <ReadComponent id={id} />
    </BasicLayout>
  );
};

export default ProductPage;
