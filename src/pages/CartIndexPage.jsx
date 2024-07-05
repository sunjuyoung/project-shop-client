import React from "react";
import { Outlet } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const CartIndexPage = () => {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
};

export default CartIndexPage;
