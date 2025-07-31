import "./Products.css"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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

  return <section>
    {error && <p>{error}</p>}
    {data.map( (oneProduct) => {
      const {id, name, category, price, description, stock} = oneProduct

      return <div key={id} className="one-product">
        <h2>{name}</h2>
        <p>Category:{category}</p>
        <p>Details: {description}</p>
        <h4>{price}$</h4>
        <p>in stock: {stock}</p>
        <Link to="*">More details</Link>
        <button>Order now</button>
      </div>
    })}
  </section>
}

export default Products