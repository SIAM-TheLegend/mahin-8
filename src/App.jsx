import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Shared/Navbar.jsx";
import Footer from "./components/Shared/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
