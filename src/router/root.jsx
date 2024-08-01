import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import productRouter from "./productRouter.jsx";
import cartRouter from "./cartRouter.jsx";
import purchaseRouter from "./purchaseRouter.jsx";
import customerRouter from "./customerRouter.jsx";
import BasicLayout from "../layouts/BasicLayout.jsx";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage.jsx"));
const Login = lazy(() => import("../pages/LoginPage.jsx"));
const CartRead = lazy(() => import("../pages/CartIndexPage.jsx"));
const SignUp = lazy(() => import("../pages/SignUpPgae.jsx"));
const CustomerProfile = lazy(() =>
  import("../pages/customer/CustomerProfilePage")
);

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
    path: "/signup",
    element: (
      <Suspense fallback={Loading}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "product",
    children: productRouter(),
  },
  {
    path: "customer",
    element: (
      <Suspense fallback={Loading}>
        <CustomerProfile />
      </Suspense>
    ),
    children: customerRouter(),
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
