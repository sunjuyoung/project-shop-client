import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const Naver = lazy(() => import("../pages/oauth/NaverRedirectPage"));

const oauthRouter = () => {
  return [
    {
      path: "naver",
      element: (
        <Suspense fallback={Loading}>
          <Naver />
        </Suspense>
      ),
    },
  ];
};

export default oauthRouter;
