import "./Navigation.css"
import { NavLink, Link, useLocation } from "react-router-dom"

const Navigation = ({ 
  selectedCategories,
  selectedTypes,
  setSelectedTypes, 
  isVisible, 
  onMenuToggle, 
  selectedSort, 
  onSortChange 
}) => {

  const location = useLocation()
  const isProductsPage = location.pathname === "/products"
  // const isHomePage = location.pathname === "/"

  return <nav className={ isVisible ? "nav-visible" : "" }>
    <div className="menu">
      <button className="close-button" onClick={ onMenuToggle }>X</button>
        <div className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink> 
        </div>

        <ul className="category-links">
          <li><Link to="products?category=electronics">Electronics</Link></li>
          <li><Link to="products?category=furniture">Furniture</Link></li>
          <li><Link to="products?category=clothes">Clothes</Link></li>
        </ul>


      {isProductsPage && (
        <div className="checkbox-container">

          {selectedCategories.includes("electronics") && (
            <>
            <p>Category:</p>
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
              <p>Category:</p>
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
              <p>Category:</p>
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
          <p>Sort products by:</p>
          {[
            { value: "name_asc", label: "Name A-Z" },
            { value: "name_desc", label: "Name Z-A" },
            { value: "price_asc", label: "Price: Low to High" },
            { value: "price_desc", label: "Price: High to Low" },
            { value: "release_date_asc", label: "Release: Oldest First" },
            { value: "release_date_desc", label: "Release: Newest First" }
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
        <li><Link to="/products?bestRated=true">Best Rated</Link></li>
        <li><Link to="/products?newReleases=true">Hot New Releases</Link></li>
        <li><Link to="/products?climatePledge=true">Climate Friendly</Link></li>
      </ul>
    </div>    
  </nav>
   
}

export default Navigation