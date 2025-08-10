import "./Slider.css"
import fetchAllProducts from "../../utils/fetchAllProducts"
import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import productImages from "../../images/productImages"
import DummyImg from "../../images/electronics/tv3.jpg"

const visibleCount = 6

const getRandomProducts = (all) => {
  const shuffled = [...all].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, visibleCount)
}

const Slider = () => {
  const [allProducts, setAllProducts] = useState([])
  const [history, setHistory] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animation, setAnimation] = useState("slide-in")
  
  useEffect(() => {
    const loadProducts = async () => {
      const all = await fetchAllProducts()
      setAllProducts(all)

      const initialSet = getRandomProducts(all)
      setHistory([initialSet])
      setCurrentIndex(0)
    }

    loadProducts()
  }, [])

  useEffect(() => {
    const loadProducts = async () => {
      const all = await fetchAllProducts()
      setAllProducts(all)

      const initialSet = getRandomProducts(all)
      setHistory([initialSet])
      setCurrentIndex(0)
    }

    loadProducts()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [history, currentIndex, allProducts])


  const handleNext = () => {
    setAnimation("slide-left")

    setTimeout(() => {
      if (currentIndex < history.length -1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Generate new set and push to the history
      const newSet = getRandomProducts(allProducts)
      setHistory([...history, newSet])
      setCurrentIndex(history.length) //Point to the new one
    }

    setAnimation("slide-in")
    }, 300) //Delay for exit animation
  }

  const handlePrev = () => {
    if(currentIndex > 0){
      setAnimation("slide-right")


      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setAnimation("slide-in")
      }, 300)      
    }
  }

  const visibleProducts = history[currentIndex] || []


  return (
    <div className="product-slider">
      <div className="slider-row">
        <button className="slider-btn" onClick={handlePrev}>< IoIosArrowBack /></button>

        <div className={`product-cards-wrapper ${animation}`}>                 
          {visibleProducts.map((product) =>(
            <div key={product.id} className="product-card">
              <Link to={`/productdetail/${product.id}`}>
                <img src={DummyImg} alt="" />
                <h5>{product.name}</h5>
              </Link>
            </div>
          ))}
        </div> 

        <button className="slider-btn" onClick={handleNext}>< IoIosArrowForward /></button>

      </div>
    </div>
  )
}

export default Slider