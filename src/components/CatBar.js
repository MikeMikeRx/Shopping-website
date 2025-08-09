import "./CatBar.css"
import { Link } from "react-router-dom"
import img1 from "..images/main-page/cat1.png"

const CatBar = () => {
  return (
    <>
        <Link to="products?category=furniture">AAA</Link>
        <Link to="products?category=electronics">BBB</Link>
        <Link to="products?category=clothes">CCC</Link>
    </>
  )
}

export default CatBar