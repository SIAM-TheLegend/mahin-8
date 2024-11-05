import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { productData } from "../Home/productData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
      </div>
    );
  }

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
      <div className="bg-purple-600 py-8 px-4 text-center text-white">
        <h1 className="text-2xl font-bold mb-2">Product Details</h1>
        <p className="max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Button className="flex-1 bg-purple-600 text-white hover:bg-purple-700">Add To Card</Button>
                <Button variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
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
