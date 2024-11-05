import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar.jsx";
import Footer from "./components/Shared/Footer.jsx";
import ProductExplorer from "./components/Home/ProductExplorer.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/category/all" replace />} />
        <Route path="/category/:category" element={<ProductExplorer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
