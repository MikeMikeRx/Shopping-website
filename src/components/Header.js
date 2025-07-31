import "./Header.css"
import { useEffect, useState } from "react"

const Header = () => {
  const [hide, setHide] = useState(false)

useEffect(() => {
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setHide(true);
    } else {
      setHide(false);
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return <header className={`header ${hide ? "hide-header" : ""}`}>
    <h1 >AMAZING SHOP</h1>
  </header>
    
}

export default Header