import "./CatBar.css"
import { Link } from "react-router-dom"

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