import productImages from "../images/productImages"

export const ProductCard = ({ category, productKey }) => {

    const imageSrc = productImages[category]?.[productKey]

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
