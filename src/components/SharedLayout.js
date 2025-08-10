import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"


const SharedLayout = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [menuVisible, setMenuVisible] = useState(false)

  const handleCategoryChange = (category, checked) =>{
    setSelectedCategories(prev => checked
      ? [...prev, category] : prev.filter(item => item !== category)
    )
  }

  const handleMenuToggle = () => {
    setMenuVisible(prev => !prev)
  }

  return <div className="layout">
    <Header onMenuToggle={handleMenuToggle} />
    <div className="main-body-content">
      <Navigation 
      selectedCategories={selectedCategories}
      onCategoryChange={handleCategoryChange}
      isVisible={menuVisible}
      />
      <div className="content-wrapper">
        <main className="main-content">
          <Outlet context={{ selectedCategories, setSelectedCategories }}/>
        </main>
      </div>      
    </div>
    <Footer />
  </div>

}

export default SharedLayout