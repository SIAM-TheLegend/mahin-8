import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { productData } from "../Home/productData";
import { useState, useEffect, useContext } from "react";
import { ActiveTabContext } from "@/contexts/ActiveTabContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setActiveTab } = useContext(ActiveTabContext);
  const product = productData.find((p) => p.id === parseInt(id));
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if product is in wishlist
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsInWishlist(wishlist.some((item) => item.id === product?.id));

    // Check if product is in cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(cart.some((item) => item.id === product?.id));
  }, [product]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!cart.some((item) => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
      setActiveTab("cart");
      navigate("/dashboard");
    }
  };

  const addToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      setIsInWishlist(true);
      setActiveTab("wishlist");
      navigate("/dashboard");
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white">
      {/* Purple Header Section */}
      <div className="bg-purple-600 py-8 px-4 pb-52 text-center text-white">
        <h1 className="text-2xl font-bold mb-2">Product Details</h1>
        <p className="max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl -mt-52 mx-auto px-4 py-8">
        <div className="bg-white/25 backdrop-blur-md border-2 border-white rounded-3xl shadow-xl p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Right: Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <div className="mt-2">
                <span className="text-lg font-semibold">Price: ${product.price}</span>
              </div>

              <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800 border-none">
                {product.status}
              </Badge>

              <p className="mt-4 text-gray-600">{product.description}</p>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Specifications:</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Rating</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600">{product.rating}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button className={`flex-1 ${isInCart ? "bg-green-600" : "bg-purple-600"} text-white hover:bg-purple-700`} onClick={addToCart} disabled={isInCart}>
                  {isInCart ? "Added to Cart" : "Add To Cart"}
                </Button>
                <Button variant="outline" className={`px-4 ${isInWishlist ? "text-red-500" : ""}`} onClick={addToWishlist}>
                  <Heart className="h-5 w-5" fill={isInWishlist ? "currentColor" : "none"} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
