import productImages from "../images/productImages"

const ProductCard = ({ category, type }) => {
    const images = productImages[category]?.[type] || []
    const imageSrc = images.length > 0 ? images[0] : null

  return (
    <div>
        {imageSrc ? (
            <img src={imageSrc} alt={`${category} ${type}`} loading="lazy" />
        ) : (
         <p>No Image found....</p>     
        )}
             
    </div>
  )
}



export default ProductCard