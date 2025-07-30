import "./Navigation.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import navLinks from "../navlinks"

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true) 

  return <nav>
    <div className="nav-header">
      <h1>AMAZING SHOP</h1>
      <button onClick={ ()=> setShowMenu(!showMenu) }>
        <GiHamburgerMenu />
      </button>
    </div>
    <div className="nav-menu">
      <div className={`${showMenu ? "nav-list show" : "nav-list hide"} `}>
        <ul>
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