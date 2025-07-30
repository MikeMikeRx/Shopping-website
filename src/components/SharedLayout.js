import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return <div className="layout">
    <Header />
    <Navigation />
    <div className="content-wrapper">
        <main className="main-content">
          <Outlet />
        </main>
      <Footer />
    </div>
  </div>

}

export default SharedLayout