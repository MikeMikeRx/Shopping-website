import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import fetchAllProducts from "../utils/fetchAllProducts"


const SharedLayout = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedSort, setSelectedSort] = useState("name_asc")
  const [allProducts, setAllProducts] = useState([])
  const [error, setError] = useState("")

  const[cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id)
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
          ? {...item, quantity: item.quantity + 1 }
          : item
        )
      }
      return [...prev, {...product, quantity: 1}]
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchAllProducts()
        setAllProducts(products)       
        } catch (err) {
          setError("Failed to load products")
          console.log("Error fetching products:", err)
        }
      }
    fetchData()
  },[])

  const handleCategoryChange = (category, checked) =>{
    setSelectedCategories(prev => checked
      ? [...prev, category] : prev.filter(item => item !== category)
    )
  }

  const handleMenuToggle = () => {
    setMenuVisible(prev => !prev)
  }

  return (
    <div className="layout">
      <Header onMenuToggle={handleMenuToggle} menuVisible={menuVisible}/>
      <div className="main-body-content">
        <Navigation 
          selectedCategories={selectedCategories}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          onCategoryChange={handleCategoryChange}
          onMenuToggle={handleMenuToggle}
          isVisible={menuVisible}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          allProducts={allProducts}
        />
        <div className="content-wrapper">
          <main className="main-content">
            <Outlet 
              context={{ 
                selectedCategories, 
                setSelectedCategories,
                selectedTypes,
                setSelectedTypes, 
                selectedSort, 
                setSelectedSort, 
                allProducts,
                error
              }}
            />
          </main>
        </div>      
      </div>
      <Footer />
    </div>
  )
}

export default SharedLayout