import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const ProductRead = lazy(() => import("../pages/ProductPage.jsx"));

const productRouter = () => {
  return [
    {
      path: ":id",
      element: (
        <Suspense fallback={Loading}>
          <ProductRead />
        </Suspense>
      ),
    },
  ];
};

export default productRouter;
