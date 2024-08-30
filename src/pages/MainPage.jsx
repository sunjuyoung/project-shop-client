import CategoryList from "../components/category/CategoryList";
import Slider from "../components/menus/Slider";
import MDRecommendations from "../components/product/MDRecommendations";
import NewProducts from "../components/product/NewProducts";

import TrendingItems from "../components/product/TrendingItems";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <BasicLayout>
      <CategoryList />
      <Slider />
      <div className="p-6 mx-auto max-w-7xl">
        <NewProducts />
        <TrendingItems />
        <MDRecommendations />
      </div>
    </BasicLayout>
  );
};

export default MainPage;
