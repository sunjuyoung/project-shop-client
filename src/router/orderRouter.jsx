import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;

const OrderRead = lazy(() => import("../pages/order/OrderPage"));

const orderRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <OrderRead />
        </Suspense>
      ),
    },
  ];
};

export default orderRouter;
