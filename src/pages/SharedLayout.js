import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
}

export default SharedLayout