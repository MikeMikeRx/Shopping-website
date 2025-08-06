import "./Slider.css"
import fetchAllProducts from "../utils/fetchAllProducts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DummyImg from "../images/electronics/mob2.jpg"


const Slider = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const all = await fetchAllProducts()
      const shuffled = all.sort(() => 0.5 - Math.random())
      const randomSelection = shuffled.slice(0, 6)
      setProducts(randomSelection)
    }

    loadProducts()
  }, [])

  return (
    <section className="slider-container">
      <h2>Products</h2>
      <div className="slider">
        {products.map((product) => (
          <div key={product.id} className="slide">
            <Link to={`/productdetail/${product.id}`}>
              <img src={DummyImg} alt={product.category} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Slider