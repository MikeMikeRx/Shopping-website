import "./Products.css"
import fetchAllProducts from "../utils/fetchAllProducts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useOutletContext, useLocation } from "react-router-dom"
import SearchBar from "../components/Products/SearchBar"
import Rating from "../components/Products/Rating"
import productImages from "../images/productImages"

const Products = () => {
  const { selectedCategories, setSelectedCategories } = useOutletContext()
  const [data, setData] = useState([])
  const [error, setError] = useState("")

const [searchTerm,setSearchTerm] = useState("")

  const location = useLocation()

useEffect(() => {
  const params = new URLSearchParams(location.search)
  const categoryFromQuery = params.get("category")

  if (categoryFromQuery) {
    setSelectedCategories([categoryFromQuery])
  }
}, [location.search, setSelectedCategories])


useEffect( () => {
  const getProducts = async () => {
    try {
      const products = await fetchAllProducts()
      setData(products)
    } catch (err) {
      setError("Failed to load products")
      console.error(err)      
    }         
  }
  getProducts()
}, [])


  const filteredData = data.filter(product => 
    selectedCategories.length > 0
    ? selectedCategories.includes(product.category)
    : true
  )
  .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return ( 
  <section className="all-products">
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {error && <div className="error-message">{error}</div>}
    {filteredData.map((oneProduct) => {
      const { id, name, category, price,type, img } = oneProduct
    
      return (
      <div key={id} className="one-product">
        <Link to={`/productdetail/${id}`}>
        <img 
        src={productImages[img]} 
        alt={name} 
        className={category}
        />
        </Link>
        <h2>{name}</h2>
        <p>Category: {type}</p>
        <Rating />
        <Link to={`/productdetail/${id}`}>Click here for more details</Link>
        <h3>Price: {price}$</h3>                
        <button className="order-btn">Order now</button>
        
      </div>
      )
    })}
  </section>
  )
}

export default Products