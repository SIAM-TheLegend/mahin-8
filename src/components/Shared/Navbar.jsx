import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  // const [activeLink, setActiveLink] = useState();

  return (
    <nav className="flex items-center max-w-6xl mx-auto justify-between px-8 py-6 bg-white">
      <Link to="/" className="text-lg px-5 py-2 font-bold text-gray-800 bg-gray-100 rounded-xl">
        Gadget Heaven
      </Link>

      <div className="flex space-x-6">
        <Link to="/home" className={`bg-transparent text-black hover:text-orange-200 px-4 py-2 rounded-md transition-colors duration-200`}>
          Home
        </Link>
        <Link to="/dashboard" className={`bg-transparent text-black hover:text-orange-200 px-4 py-2 rounded-md transition-colors duration-200`}>
          Dashboard
        </Link>
        <Link to="/statistics" className={`bg-transparent text-black hover:text-orange-200 px-4 py-2 rounded-md transition-colors duration-200`}>
          Statistics
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/cart" className="p-2 rounded-full bg-gray-300 transition duration-200">
          <ShoppingCart className="w-6 h-6 text-gray-900" />
        </Link>
        <Link to="/favorites" className="p-2 rounded-full bg-gray-300 transition duration-200">
          <Heart className="w-6 h-6 text-gray-900" />
        </Link>
      </div>
    </nav>
  );
}
