import "./Products.css"
import fetchAllProducts from "../utils/fetchAllProducts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DummyImg from "../images/electronics/tv3.jpg"

const Products = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

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
},[])

  return <section className="all-products">
    {error && <p>{error}</p>}
    {data.map( (oneProduct) => {
      const {id, name, category, price} = oneProduct

      return <div key={id} className="one-product">
        <img src={DummyImg} alt="" className={category}/>
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Rating: ****** </p>
        <h3>Price: {price}$</h3>        
        <Link to={`/productdetail/${id}`}>Click here for more details</Link>
        <button>Order now</button>
      </div>
    })}
  </section>
}

export default Products