import { IoStar } from "react-icons/io5"
import { useState, useRef, useEffect } from "react"

const Rating = () => {
    const [rating, setRating] = useState(0)
    const ratingRef = useRef([])
    const stars = [1,2,3,4,5]

    const handleRating = (index) =>{
      setRating(index + 1)
      localStorage.setItem("rating", index + 1)

        stars.forEach((_, i) => {
        if (ratingRef.current[i]) {
            ratingRef.current[i].style.color = i <= index ? "gold" : "gray";
        }
    });
    }

    
  return <div>
    {stars.map((oneStar, index) =>{
      return <button 
      key={index}
      ref={(el) => ratingRef.current = el}
      onClick={() => handleRating(index)}
      >
        <IoStar />
      </button>
    })}
    
  </div> 
  
}

export default Rating