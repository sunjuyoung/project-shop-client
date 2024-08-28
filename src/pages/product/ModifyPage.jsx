import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import ModifyComponent from "../../components/product/ModifyComponent";
import { useParams } from "react-router-dom";
import useCategoryStore from "../../store/useCategoryStore";

const ModifyPage = () => {
  const childCategoryState = useCategoryStore((state) => state.childCategories);

  const { id } = useParams();
  return (
    <BasicLayout>
      <ModifyComponent id={id} category={childCategoryState} />
    </BasicLayout>
  );
};

export default ModifyPage;
