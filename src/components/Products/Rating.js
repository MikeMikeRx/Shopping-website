import { IoStar } from "react-icons/io5"
import { useState, useRef, useEffect } from "react"

const Rating = ({ productId}) => {
    const [rating, setRating] = useState(0)
    const ratingRef = useRef([])
    
    useEffect(() => {
      const savedRating = localStorage.getItem(`rating_${productId}`)
      if (savedRating) {
        setRating(Number(savedRating))
        updateStars(Number(savedRating) -1)
      }
    }, [productId])

    const updateStars = (index) => {
      ratingRef.current.forEach((star, i) => {
        if (star) {
          star.style.color = i <= index ? "gold" : "gray"
        }
      })
    }

    const handleRating = (index) =>{
      setRating(index + 1)
      localStorage.setItem("rating", index + 1)
      updateStars(index)
    }

    
  return <div>
    {[1,2,3,4,5].map((_, index) => (
      <button 
      key={index}
      ref={(el) => ratingRef.current[index] = el}
      onClick={() => handleRating(index)}
      style={{ background: "none", border: "none", cursor: "pointer" }}
      aria-label={`Rate ${index + 1} stars`}
      >
        <IoStar />
      </button>
    ))}
    
  </div> 
  
}

export default Rating