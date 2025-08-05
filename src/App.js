import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import SharedLayout from "./components/SharedLayout"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={ <Home /> }/>
        <Route path="Products" element={ <Products /> }/>
        <Route path="ProductDetail/:productID" element={ <ProductDetail />}/>
      </Route>
    </Routes>  
  </BrowserRouter>
  
}

export default App