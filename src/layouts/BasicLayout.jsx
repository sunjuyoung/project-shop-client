import Header from "../components/menus/Header";

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-200 text-black text-center p-4 mt-4">
        &copy; 2024 쇼핑몰. All rights reserved.
      </footer>
    </div>
  );
};

export default BasicLayout;
