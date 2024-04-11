import Navbar from "../(components)/Navbar/page"
import Footer from "../(components)/Footer/page"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
