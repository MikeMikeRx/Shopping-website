import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import fetchAllProducts from "../utils/fetchAllProducts"
import DummyImg from "../images/electronics/tv3.jpg"

const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  
  useEffect ( () => {
    const fetchProductFromAll = async () => {
      try {
        const allProducts = await fetchAllProducts()
        const matched = allProducts.find( (oneProduct) => oneProduct.id === productId)

        if(matched) {
          setProduct(matched)
          setError("")
        } else {
          setError("No product found ...")
        }
      } catch (err) {
        setError("Error fetching product details: " + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProductFromAll()
  },[productId])
  
  if(loading){
    return <div className="loading">Loading product details...</div>
  }

  if(error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <section className="product-detail">
      {error && <p>{error}</p>}
      {product && (
        <div key={product.id}>
          <img src={DummyImg} alt="" />
          <div className="text">
          <h2>{product.name}</h2>          
          <p className="description">{product.description}</p>
          <p className="price">Our price: {product.price}$</p>
          <p>Category: {product.type}</p>
          <p>Currently in stock: {product.stock}</p>
          </div>
          <button className="order-button" >Order now</button>
        </div>
      )}
    </section>
  )
}

export default ProductDetail