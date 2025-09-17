import "./Navigation.css"
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const Navigation = ({ 
  selectedCategories,
  selectedTypes,
  setSelectedTypes, 
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

        <ul className="category-links">
          <li>
            <Link to="products?category=electronics">Electronics</Link>
            </li>
          <li>
            <Link to="products?category=furniture">Furniture</Link>
            </li>
          <li>
            <Link to="products?category=clothes">Clothes</Link>
          </li>
        </ul>


      {isProductsPage && (
        <div className="checkbox-container">
          <h2>Filter & Sort:</h2>

          {selectedCategories.includes("electronics") && (
            <>
            <h3>Electronics</h3>
            {["Laptop", "Smartphone", "Smart Tv"].map((subcategory) => (
              <div key={subcategory}>
                <input
                  className="checkbox" 
                  type="checkbox" 
                  name={subcategory}
                  id={`filter-${subcategory}`}
                  checked={selectedTypes.includes(subcategory)}
                  onChange={(e)=>{
                    const {name,checked} = e.target
                    if (checked) {
                      setSelectedTypes((prev)=>[...prev,name])
                    } else {
                      setSelectedTypes((prev) => prev.filter((t)=> t!==name))
                    }
                  }}
                />
                <label htmlFor={`filter-${subcategory}`}>
                  {subcategory[0].toUpperCase() + subcategory.slice(1)}
                </label>
              </div>
            ))}
            </>
          )}

          {selectedCategories.includes("furniture") && (
            <>
              <h3>Furniture</h3>
              {["Chair", "Table", "Armchair"].map((subcategory) => (
                <div key={subcategory}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name={subcategory}
                    id={`filter-${subcategory}`}
                    checked={selectedTypes.includes(subcategory)}
                    onChange={(e)=>{
                      const {name,checked} = e.target
                      if (checked) {
                        setSelectedTypes((prev)=>[...prev,name])
                      } else {
                        setSelectedTypes((prev) => prev.filter((t)=> t!==name))
                      }
                    }}
                  />
                  <label htmlFor={`filter-${subcategory}`}>
                    {subcategory[0].toUpperCase() + subcategory.slice(1)}
                  </label>
                </div>
              ))}
            </>
          )}

          {selectedCategories.includes("clothes") && (
            <>
              <h3>Clothes</h3>
              {["Hoody", "Jacket", "Jeans"].map((subcategory) => (
                <div key={subcategory}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name={subcategory}
                    id={`filter-${subcategory}`}
                    checked={selectedTypes.includes(subcategory)}
                    onChange={(e)=>{
                      const {name,checked} = e.target
                      if (checked) {
                        setSelectedTypes((prev)=>[...prev,name])
                      } else {
                        setSelectedTypes((prev) => prev.filter((t)=> t!==name))
                      }
                    }}
                  />
                  <label htmlFor={`filter-${subcategory}`}>
                    {subcategory[0].toUpperCase() + subcategory.slice(1)}
                  </label>
                </div>
              ))}
            </>
          )}
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
        <li>
          <Link to="/products?bestRated=true">Best Rated</Link>
        </li>
        <li>
          <Link to="/products?newReleases=true">Hot New Releases</Link>
        </li>
        <li>
          <Link to="/products?climatePledge=true">Climate Friendly</Link>
        </li>
      </ul>
    </div>    
  </nav>
   
}

export default Navigation