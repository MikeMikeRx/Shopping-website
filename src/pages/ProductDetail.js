import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect ( () => {
    if (!product) return

    const docRef = doc(db, "electronics", productId)
    
    const fetchProduct = async () => {
      try{
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProduct( { id: docSnap.id, ...docSnap.data() })
          setError("")
        } else {
          setError("No product found")
        }
      } catch (err){
        setError("Error fetching product details" + err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchProduct()
  },[productId]) 







  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail