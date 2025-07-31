import "./Products.css"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"

const Products = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

useEffect( () => {
  const colRef = collection(db, "electronics")

  const unsubscribe = onSnapshot(
    colRef, (snapshot) =>{
      if(snapshot.empty) {
        setError("No products found")        
      } else {
        const result = []
        snapshot.docs.forEach( (product) =>{
          result.push( {id: product.id, ...product.data()} )
        })
        console.log(result);
        setData(result)        
      }
    },
    (err) => {setError(err.message)}
  )

  return ()=> unsubscribe()
},[])

  return (
    <div><p>Products ==== not complete</p></div>
  )
}

export default Products