import "./TopBar.css"
import { Link } from "react-router-dom"
import img1 from "../../images/main-page/cat3.jpg"
import img2 from "../../images/main-page/cat2.jpg"
import img3 from "../../images/main-page/cat5.jpg"

const TopBar = () => {
  return (
    <section className="categories-section">
        <Link to="products?category=furniture">
          <img src={img3} alt="" />
        </Link>
        
        <Link to="products?category=electronics">
          <img src={img1} alt="" />
        </Link>
        
        <Link to="products?category=clothes">
        <img src={img2} alt="" />
        </Link>
    </section>
  )
}

export default TopBar