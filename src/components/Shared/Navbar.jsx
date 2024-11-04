import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react"; // Shadcn icon imports

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold text-gray-800">
        Gadget Heaven
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-black transition-colors duration-200">
          Home
        </Link>
        <Link to="/statistics" className="text-gray-600 hover:text-black transition-colors duration-200">
          Statistics
        </Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-black transition-colors duration-200">
          Dashboard
        </Link>
      </div>

      {/* Icons */}
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
