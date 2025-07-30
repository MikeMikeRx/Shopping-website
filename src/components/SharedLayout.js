import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
}

export default SharedLayout