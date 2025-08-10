import "./Navigation.css"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import navLinks from "../navlinks"

const Navigation = ({ selectedCategories, onCategoryChange, isVisible, onMenuToggle }) => {

  const location = useLocation()

  const isProductsPage = location.pathname === "/products"

  const handleChange = (e) => {
    const { name, checked } = e.target
    onCategoryChange(name, checked)
  }

  return <nav className={ isVisible ? "nav-visible" : "" }>
    <div className="menu">
      <button className="close-button" onClick={ onMenuToggle }>X</button>
        <div className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink> 
        </div>

      {isProductsPage && (
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
      )}

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
  </nav>
   
}

export default Navigation