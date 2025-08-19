import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import fetchAllProducts from "../utils/fetchAllProducts"


const SharedLayout = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [menuVisible, setMenuVisible] = useState(false)
  const [selectedSort, setSelectedSort] = useState("name_asc")
  const [allProducts, setAllProducts] = useState([])

  const handleCategoryChange = (category, checked) =>{
    setSelectedCategories(prev => checked
      ? [...prev, category] : prev.filter(item => item !== category)
    )
  }

  const handleSortChange = (sortValue) => {
    selectedSort(sortValue)
  }

  const handleMenuToggle = () => {
    setMenuVisible(prev => !prev)
  }

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchAllProducts()
      setAllProducts(products)
    }
    fetchData()
  },[])

  return <div className="layout">
    <Header onMenuToggle={handleMenuToggle} menuVisible={menuVisible}/>
    <div className="main-body-content">
      <Navigation 
      selectedCategories={selectedCategories}
      onCategoryChange={handleCategoryChange}
      onMenuToggle={handleMenuToggle}
      isVisible={menuVisible}
      selectedSort={selectedSort}
      onSortChange={setSelectedSort}
      // allProducts={allProducts}
      />
      <div className="content-wrapper">
        <main className="main-content">
          <Outlet context={{ selectedCategories, setSelectedCategories, selectedSort, setSelectedSort }}/>
        </main>
      </div>      
    </div>
    <Footer />
  </div>

}

export default SharedLayout