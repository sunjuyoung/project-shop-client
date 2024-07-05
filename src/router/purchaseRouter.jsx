import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const PurchaseHistory = lazy(() => import("../pages/PurchaseHistoryPage"));

const purchaseRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <PurchaseHistory />
        </Suspense>
      ),
    },
  ];
};

export default purchaseRouter;
