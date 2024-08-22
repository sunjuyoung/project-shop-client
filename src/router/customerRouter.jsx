import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const CustomerProfile = lazy(() =>
  import("../pages/customer/CustomerProfilePage")
);

const PasswordChange = lazy(() =>
  import("../pages/customer/passwordModifyPage")
);

const customerRouter = () => {
  return [
    {
      path: ":id",
      element: (
        <Suspense fallback={Loading}>
          <CustomerProfile />
        </Suspense>
      ),
    },
    {
      path: "modify",
      element: (
        <Suspense fallback={Loading}>
          <PasswordChange />
        </Suspense>
      ),
    },
  ];
};

export default customerRouter;
