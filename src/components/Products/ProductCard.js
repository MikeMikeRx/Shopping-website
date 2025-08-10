import productImages from "../images/productImages"

export const ProductCard = ({ category, type, productKey }) => {
    const imageForType = productImages[category]?.[type]
    const imageSrc = productImages[category]?.[productKey] : null

  return (
    <div>
        {imageSrc ? (
            <img src={imageSrc} alt={`${category} ${productKey}`} loading="lazy" />
        ) : (
            <p>No Image found....</p>
        )}
    </div>
  )
}
