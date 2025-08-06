import "./Navigation.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import navLinks from "../navlinks"

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [electronicsChecked, setElectronicsChecked] = useState(false)
  const [clothesChecked, setClothesChecked] = useState(false)
  const [furnitureChecked, setFurnitureChecked] = useState(false)



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

        <div className="checkbox-container">
          <h2>Filter:</h2>
            <input 
            type="checkbox" 
            id="checkbox"
            name="electronics" 
            checked={electronicsChecked}
            onChange={ (e) => setElectronicsChecked(e.target.checked) }
            />
            <label htmlFor="filter">Eletronics</label>

            <input 
            type="checkbox" 
            id="checkbox"
            name="clothes" 
            checked={clothesChecked}
            onChange={ (e) => setClothesChecked(e.target.checked) }
            />
            <label htmlFor="filter">Clothes</label>

            <input 
            type="checkbox" 
            id="checkbox"
            name="furniture" 
            checked={furnitureChecked}
            onChange={ (e) => setFurnitureChecked(e.target.checked) }
            />
            <label htmlFor="filter">Furniture</label>            
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