import "./Products.css"
import fetchAllProducts from "../utils/fetchAllProducts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useOutletContext, useLocation } from "react-router-dom"
import DummyImg from "../images/furniture/fur8.jpg"

const Products = () => {
  const { selectedCategories, setSelectedCategories } = useOutletContext()
  const [data, setData] = useState([])
  const [error, setError] = useState("")
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

const filteredData = selectedCategories.length > 0
  ? data.filter(product => selectedCategories.includes(product.category))
  : data

  return ( 
  <section className="all-products">
    {error && <div className="error-message">{error}</div>}
    {filteredData.map((oneProduct) => {
      const {id, name, category, price} = oneProduct
    
      return (
      <div key={id} className="one-product">
        <img src={DummyImg} alt="" className={category}/>
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Rating: ****** </p>
        <h3>Price: {price}$</h3>        
        <Link to={`/productdetail/${id}`}>Click here for more details</Link>
        <button>Order now</button>
      </div>
      )
    })}
  </section>
  )
}

export default Products