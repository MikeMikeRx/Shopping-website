import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return <div className="layout">
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