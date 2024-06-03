import Footer from "@/app/(components)/Footer/page";
import Navbar from "@/app/(components)/Navbar/page";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
