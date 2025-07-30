import "./Products.css"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"

const Products = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

useEffect( () => {

})

  return (
    <div>Products</div>
  )
}

export default Products