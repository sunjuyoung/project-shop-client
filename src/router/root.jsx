import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import productRouter from "./productRouter.jsx";
import cartRouter from "./cartRouter.jsx";
import purchaseRouter from "./purchaseRouter.jsx";
import customerRouter from "./customerRouter.jsx";
import oauthRouter from "./oauthRouter.jsx";
import orderRouter from "./orderRouter.jsx";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage.jsx"));
const Login = lazy(() => import("../pages/LoginPage.jsx"));
const CartRead = lazy(() => import("../pages/CartIndexPage.jsx"));
const SignUp = lazy(() => import("../pages/SignUpPgae.jsx"));
const WidgetCheckout = lazy(() =>
  import("../pages/toss/widget/WidgetCheckout.jsx")
);
import { SuccessPage } from "../pages/toss/widget/SuccessPage.jsx";
import { PaymentCheckout } from "../pages/toss/PaymentCheckout.jsx";
import { FailPage } from "../pages/toss/widget/FailPage.jsx";

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
    path: "oauth",
    children: oauthRouter(),
  },

  {
    path: "product",
    children: productRouter(),
  },
  {
    path: "customer",
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
  {
    path: "order",
    children: orderRouter(),
  },
  {
    path: "checkout",
    element: <PaymentCheckout />,
  },
  {
    path: "widget",
    children: [
      {
        path: "checkout",
        element: (
          <Suspense fallback={Loading}>
            <WidgetCheckout />
          </Suspense>
        ),
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
  },

  {
    path: "fail",
    element: <FailPage />,
  },
]);

export default root;
