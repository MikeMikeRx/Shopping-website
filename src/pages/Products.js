import "./Products.css"
import { useState, useEffect } from "react"
import { useOutletContext, useLocation, Link } from "react-router-dom"
import SearchBar from "../components/Products/SearchBar"
import Rating from "../components/Products/Rating"
import productImages from "../images/productImages"

const Products = () => {
  const { 
    selectedCategories, 
    setSelectedCategories, 
    selectedSort, 
    allProducts, 
    error 
  } = useOutletContext()
  const [searchTerm,setSearchTerm] = useState("")
  const location = useLocation()
  

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryFromQuery = params.get("category")

    if (categoryFromQuery) {
      setSelectedCategories([categoryFromQuery])
    }
  }, [location.search, setSelectedCategories])


  const filteredData = allProducts.filter((product) =>
    selectedCategories.length > 0
      ? selectedCategories.includes(product.category)
      : true
  ).filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  filteredData.sort((a, b) => {
    switch(selectedSort) {
      case "name_asc":
        return a.name.localeCompare(b.name)
      case "name_desc":
        return b.name.localeCompare(a.name)
      case "price_asc":
        return a.price - b.price
      case "price_desc":
        return b.price - a.price
      case "release_date_asc":
        return new Date(a.date) - new Date(b.date)
      case "release_date_desc":
        return new Date(b.date) - new Date(a.date)
      default:
        return 0
    }
  })


  return ( 
  <section className="all-products">
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {error && <div className="error-message">{error}</div>}

    {filteredData.map((oneProduct) => {
      const { id, name, category, price,type, img } = oneProduct    
      return (
      <div key={id} className="one-product">
        <Link className="img-link" to={`/productdetail/${id}`}>
          <img 
            src={productImages[img]} 
            alt={name} 
            className={category}
          />
        </Link>
        <h2>{name}</h2>
        <p>Category: {type}</p>
        <Rating productId={id}/>
        <h3>Price: {price}$</h3>  
        <Link className="details-link" to={`/productdetail/${id}`}>Click here for more details</Link>                      
        <button className="order-btn">Order now</button>        
      </div>
      )
    })}
  </section>
  )
}

export default Products