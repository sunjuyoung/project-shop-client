import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const ProductRead = lazy(() => import("../pages/ProductPage.jsx"));
const RegisterProduct = lazy(() =>
  import("../pages/product/RegisterProduct.jsx")
);

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
    {
      path: "create",
      element: (
        <Suspense fallback={Loading}>
          <RegisterProduct />
        </Suspense>
      ),
    },
  ];
};

export default productRouter;
