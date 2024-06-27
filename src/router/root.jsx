import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage.jsx"));
const Login = lazy(() => import("../pages/LoginPage.jsx"));

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
]);

export default root;
