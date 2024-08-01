import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const CustomerProfile = lazy(() =>
  import("../pages/customer/CustomerProfilePage")
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
  ];
};

export default customerRouter;
