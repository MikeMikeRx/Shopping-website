import "./Navigation.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import navLinks from "../navlinks"

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true) 

  return <nav>
    <div className="nav-top">      
      <button onClick={ ()=> setShowMenu(!showMenu) }>
        <GiHamburgerMenu />
      </button>
    </div>
    <div className="menu">
      <div className={`${showMenu ? "nav-list show" : "nav-list hide"} `}>

        <div className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="products">Products</NavLink> 
        </div>

        <ul className="nav-menu">
          {
            navLinks.map( (oneLink) => {
              const {id, url, text} = oneLink
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  </nav>
   
}

export default Navigation