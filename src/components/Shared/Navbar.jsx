import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  // const [activeLink, setActiveLink] = useState();
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-lg font-bold text-gray-800">
        Gadget Heaven
      </Link>

      <div className="flex space-x-6">
        <Link to="/home" className={`bg-fuchsia-50 active:bg-fuchsia-300 text-gray-600 px-4 py-2 rounded-md hover:text-black transition-colors duration-200`}>
          Home
        </Link>
        <Link to="/dashboard" className={`bg-fuchsia-50 active:bg-fuchsia-300 text-gray-600 px-4 py-2 rounded-md hover:text-black transition-colors duration-200`}>
          Dashboard
        </Link>
        <Link to="/statistics" className={`bg-fuchsia-50 active:bg-fuchsia-300 text-gray-600 px-4 py-2 rounded-md hover:text-black transition-colors duration-200`}>
          Statistics
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </Link>
        <Link to="/favorites" className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
          <Heart className="w-6 h-6 text-gray-600" />
        </Link>
      </div>
    </nav>
  );
}
