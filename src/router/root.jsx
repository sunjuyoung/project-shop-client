import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import productRouter from "./productRouter.jsx";
import cartRouter from "./cartRouter.jsx";
import purchaseRouter from "./purchaseRouter.jsx";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage.jsx"));
const Login = lazy(() => import("../pages/LoginPage.jsx"));
const CartRead = lazy(() => import("../pages/CartIndexPage.jsx"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={Loading}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "product",
    children: productRouter(),
  },
  {
    path: "cart",
    element: (
      <Suspense fallback={Loading}>
        <CartRead />
      </Suspense>
    ),
    children: cartRouter(),
  },
  {
    path: "purchase",
    children: purchaseRouter(),
  },
]);

export default root;
