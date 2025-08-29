import "./Navigation.css"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import navLinks from "../navlinks"

const Navigation = ({ 
  selectedCategories, 
  onCategoryChange, 
  isVisible, 
  onMenuToggle, 
  selectedSort, 
  onSortChange,
  allProducts 
}) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [bestRatedIds, setBestRatedIds] = useState([])

  useEffect(() => {
    if(!allProducts) return

    const topRated = allProducts
      .filter(p => p.rating > 0)
      .sort((a,b) => b.rating - a.rating)
      .slice(0,9)

    setBestRatedIds(topRated.map(p => p.id))  
  }, [allProducts])

  const handleBestRated = () => {
    navigate("products?bestRated=true")
  }

  const isProductsPage = location.pathname === "/products"
  const isHomePage = location.pathname === "/"

  const handleChange = (e) => {
    const { name, checked } = e.target
    onCategoryChange(name, checked)
  }

  const handleSortChange = (e) => {
    onSortChange(e.target.value)
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
          <h2>Filter & Sort:</h2>

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

      {isProductsPage && (
        <div className="sort-container">
          <h2>Sort products by:</h2>
          {[
            { value: "name_asc", label: "Name A-Z" },
            { value: "name_desc", label: "Name Z-A" },
            { value: "price_asc", label: "Price: Low to High" },
            { value: "price_desc", label: "Price: High to Low" },
            { value: "release_date_asc", label: "Release Date: Oldest First" },
            { value: "release_date_desc", label: "Release Date: Newest First" }
          ].map(({ value, label }) => (
            <label key={value} className="sort-input">
              <input 
                type="radio" 
                name="sort"
                value={value}
                checked={selectedSort === value}
                onChange={(e) => onSortChange(e.target.value)}
              />
              {label}
            </label>
          ))}          
        </div>
      )}

      <ul className="nav-menu">
        <button onClick={handleBestRated}>Best Rated</button>
        {navLinks.map( (oneLink) => {
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