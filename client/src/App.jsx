import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductListPage from "./pages/ProductListPage";
import Navbar from "./components/Navbar";

function App() {
  

  return (
   <BrowserRouter>
   <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/products" element={<ProductListPage/>}/>
      </Routes>
   
   </BrowserRouter>
  )
}

export default App
