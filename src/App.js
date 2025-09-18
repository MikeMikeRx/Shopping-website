import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import ShoppingCart from "./pages/ShoppingCart"
import SharedLayout from "./components/SharedLayout"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={ <Home /> }/>
        <Route path="products" element={ <Products /> }/>
        <Route path="productdetail/:productId" element={ <ProductDetail />}/>
        <Route path="cart" element={ <ShoppingCart /> }/>
      </Route>
    </Routes>  
  </BrowserRouter>
  
}

export default App