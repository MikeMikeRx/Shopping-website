import "./Slider.css"
import fetchAllProducts from "../utils/fetchAllProducts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DummyImg from "../images/electronics/mob2.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const Slider = () => {
  const [products, setProducts] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 6

  useEffect(() => {
    const loadProducts = async () => {
      const all = await fetchAllProducts()
      const shuffled = all.sort(() => 0.5 - Math.random())
      const randomSelection = shuffled.slice(0, 6)
      setProducts(randomSelection)
    }

    loadProducts()
  }, [])

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= products.length ? 0 : prev + visibleCount
    )
  }

  const prev = () => {
    setStartIndex((prev) => 
      prev - visibleCount > 0 ? products.length - visibleCount : prev - visibleCount
    )
  }

  const visibleProducts = products. slice(startIndex, startIndex + visibleCount)


  return (
    <div className="product-slider">
      <div className="slider-row">
        <button className="slider-btn" onClick={prev}>< IoIosArrowBack /></button>
                  
        {visibleProducts.map((product) =>(
          <div key={product.id} className="product-card">
            <Link to={`/productdetail/${product.id}`}>
              <img src={DummyImg} alt="" />
            </Link>
          </div>
        ))}

        <button className="slider-btn" onClick={next}>< IoIosArrowForward /></button>

      </div>
    </div>
  )
}

export default Slider