import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div> */}
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
