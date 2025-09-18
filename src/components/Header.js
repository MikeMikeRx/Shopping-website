import "./Header.css"
import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { SlBasket } from "react-icons/sl";

const Header = ({ onMenuToggle, menuVisible }) => {

  const [hide, setHide] = useState(false)
  const location = useLocation()

useEffect(() => {
  let lastScrollY = 0

  const handleScroll = () => {
    if(window.innerWidth >= 1300){
      setHide(false)
      return
    }

    if (location.pathname === '/products'){
    const currentScrollY = window.scrollY

    if(!menuVisible) {
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setHide(true)
    } else {
      setHide(false)
    }
    } else {
      setHide(false)
    }

    lastScrollY = currentScrollY
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [location.pathname, menuVisible])


  return <header className={`header ${hide ? "hide-header" : ""}`}>
      
      <button className="menu-button" onClick={ onMenuToggle }>
        <GiHamburgerMenu />
      </button>
    
        <h1 >AMAZING SHOP</h1>

  </header>
    
}

export default Header