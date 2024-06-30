import CategoryMenu from "../components/menus/CategoryMenu";
import Footer from "../components/menus/Footer";
import Header from "../components/menus/Header";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
