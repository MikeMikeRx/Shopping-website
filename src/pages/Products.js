import "./Products.css"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DummyImg from "../images/electronics/tv3.jpg"

const Products = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  // const [collection, setCollection] = useState()

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
        setData(result)        
      }
    },
    (err) => {setError(err.message)}
  )

  return ()=> unsubscribe()
},[])

  return <section className="all-products">
    {error && <p>{error}</p>}
    {data.map( (oneProduct) => {
      const {id, name, category, price, description, stock} = oneProduct

      return <div key={id} className="one-product">
        <img src={DummyImg} alt="" className={category}/>
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Details: {description}</p>
        <h3>Price: {price}$</h3>
        <p className="in-stock">in stock: {stock}</p>
        <Link to="*">Click here for more details</Link>
        <button>Order now</button>
      </div>
    })}
  </section>
}

export default Products