import React from "react";
import PasswordChangeComponent from "../../components/auth/PasswordChangeComponent";
import BasicLayout from "../../layouts/BasicLayout";

const passwordModifyPage = () => {
  return (
    <BasicLayout>
      <PasswordChangeComponent />
    </BasicLayout>
  );
};

export default passwordModifyPage;
