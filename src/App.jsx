import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar.jsx";
import Footer from "./components/Shared/Footer.jsx";
import ProductExplorer from "./components/Home/ProductExplorer.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { ActiveTabProvider } from "./contexts/ActiveTabContext";

function App() {
  return (
    <ActiveTabProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/category/all" replace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category/:category" element={<ProductExplorer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ActiveTabProvider>
  );
}

export default App;
