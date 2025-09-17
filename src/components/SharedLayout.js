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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchAllProducts()
        setAllProducts(products)       
        } catch {
          setError("Failed to load products")
          console.log(error)
        }
      }
    fetchData()
  },[])

  const handleCategoryChange = (category, checked) =>{
    setSelectedCategories(prev => checked
      ? [...prev, category] : prev.filter(item => item !== category)
    )
  }

  const handleSortChange = (sortValue) => {
    setSelectedSort(sortValue)
  }

  const handleMenuToggle = () => {
    setMenuVisible(prev => !prev)
  }

  return <div className="layout">
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

}

export default SharedLayout