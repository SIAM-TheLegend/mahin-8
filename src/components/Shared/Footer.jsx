import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="text-center">
        {/* Logo and Description */}
        <h2 className="text-2xl font-bold text-gray-800">Gadget Heaven</h2>
        <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8 md:space-x-16 space-y-8 md:space-y-0 text-center md:text-left">
        {/* Services Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/product-support" className="hover:underline">
                Product Support
              </Link>
            </li>
            <li>
              <Link to="/order-tracking" className="hover:underline">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link to="/shipping-delivery" className="hover:underline">
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
