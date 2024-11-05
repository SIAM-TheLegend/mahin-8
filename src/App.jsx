import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar.jsx";
import Footer from "./components/Shared/Footer.jsx";
import ProductExplorer from "./components/Home/ProductExplorer.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { ActiveTabProvider } from "./contexts/ActiveTabContext";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";

function App() {
  return (
    <ActiveTabProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/category/:category" element={<ProductExplorer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ActiveTabProvider>
  );
}

export default App;
