import "./Rating.css"
import { IoStar } from "react-icons/io5"
import { useState, useEffect } from "react"
import { doc, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase/config"

const Rating = ({ productId, category }) => {
    const [rating, setRating] = useState(0)
    
    useEffect(() => {
      const unsubscribe = onSnapshot(doc(db, category, productId), (snapshot) => {
        if (snapshot.exists()) {
          setRating(snapshot.data().rating || 0)
        }
      })
      return () => unsubscribe()
    }, [category, productId])


    const handleRating = (index) =>{
      setRating(index + 1)
      localStorage.setItem(`rating_${productId}`, index + 1)
    }

    
  return <div className="rating-bar">
    {[1,2,3,4,5].map((_, index) => (
      <button 
        key={index}
        onClick={() => handleRating(index)}
        style={{ color: index < rating ? "gold" : "gray" }}
      >
        <IoStar size={24}/>
      </button>
    ))}
    
  </div> 
  
}

export default Rating