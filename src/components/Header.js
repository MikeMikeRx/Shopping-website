import "./Header.css"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [hide, setHide] = useState(false)
  let lastScrollY = useRef(0)

  useEffect( ()=>{
    const mainContent = document.querySelector(".main-content")

      if(!mainContent) return
    
      const handleScroll = () => {
      const currentScroll = mainContent.scrollTop
            
      if (currentScroll > lastScrollY.current && currentScroll > 60) {
        setHide(true)
      } else {
        setHide(false)
      }

      lastScrollY.current = currentScroll
    }

    mainContent.addEventListener("scroll", handleScroll)
    return () => mainContent.removeEventListener("scroll", handleScroll)
  },[])

  return <header className={`header ${hide ? "hide-header" : ""}`}>
    <h1 >AMAZING SHOP</h1>
  </header>
    
}

export default Header