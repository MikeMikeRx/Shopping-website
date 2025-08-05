import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return <div className="layout">
    <Header />
    <div className="main-body-content">
      <Navigation />
      <div className="content-wrapper">
        <main className="main-content">
          <Outlet />
        </main>
      </div>      
    </div>
    <Footer />
  </div>

}

export default SharedLayout