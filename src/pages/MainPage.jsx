import Slider from "../components/menus/Slider";
import ProductList from "../components/product/ProductList";
import ProductList2 from "../components/product/ProductList2";
import ProductListRecent from "../components/product/ProductListRecent";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <BasicLayout>
      <Slider />
      <ProductListRecent type="최근" />
      <ProductList type="featured" />
      <ProductList2 type="new" />
      {/* 다른 컴포넌트 및 콘텐츠 추가 */}
    </BasicLayout>
  );
};

export default MainPage;
