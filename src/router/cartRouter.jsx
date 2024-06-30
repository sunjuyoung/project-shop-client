import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const CartRead = lazy(() => import("../pages/CartPage"));

const cartRouter = () => {
  return [
    {
      path: ":id",
      element: (
        <Suspense fallback={Loading}>
          <CartRead />
        </Suspense>
      ),
    },
  ];
};

export default cartRouter;
