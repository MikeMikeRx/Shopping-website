import "./Header.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Header = () => {
  const [hide, setHide] = useState(false)
  const location = useLocation()

useEffect(() => {
  let lastScrollY = 0

  const handleScroll = () => {
    if (location.pathname === '/products'){
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setHide(true)
    } else {
      setHide(false)
    }
    lastScrollY = currentScrollY
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [location.pathname])


  return <header className={`header ${hide ? "hide-header" : ""}`}>
    <h1 >AMAZING SHOP</h1>
  </header>
    
}

export default Header