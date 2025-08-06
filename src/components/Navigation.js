import "./Navigation.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import navLinks from "../navlinks"

const Navigation = ({ selectedCategories, onCategoryChange }) => {
  const [showMenu, setShowMenu] = useState(true)

  const handleChange = (e) => {
    const { name, checked } = e.target
    onCategoryChange(name, checked)
  }


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

          {["electronics", "clothes", "furniture"].map((category) => (
            <div key={category}>
              <input
              className="checkbox" 
              type="checkbox"
              name={category}
              id={`filter-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={handleChange}
              />
              <label htmlFor={`filter-${category}`}>{category[0].toUpperCase() + category.slice(1)}              
              </label>
            </div>
          ))}
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