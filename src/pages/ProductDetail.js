import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { doc, getDoc } from "firebase/firestore"

const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 







  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail