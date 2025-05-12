import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import ProductPage from "../components/product/product_page/ProductPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/product/:productSlug" element={<ProductPage />}/>
      </Routes>
    </Router>
    
  )
}

export default App
