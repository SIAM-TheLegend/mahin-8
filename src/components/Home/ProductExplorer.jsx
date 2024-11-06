import { useNavigate, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { productData } from "./productData";

// ProductCard Component
const ProductCard = ({ id, name, price, image, description }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-1">${price}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
        <Button variant="outline" className="w-full mt-4 text-purple-600 border-purple-600 hover:bg-purple-50" onClick={() => navigate(`/product/${id}`)}>
          View Details
        </Button>
      </div>
    </div>
  );
};

// Sidebar Category Item Component
const CategoryItem = ({ name, active, onClick }) => {
  return (
    <button onClick={onClick} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${active ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
      {name}
    </button>
  );
};

// Main Product Explorer Component
const ProductExplorer = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  if (category === undefined) {
    // Render the ProductExplorer component when the route is /home
    const categories = ["All Products", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone"];
    const filteredProducts = productData;

    const handleCategoryClick = (categoryName) => {
      const formattedCategory = categoryName === "All Products" ? "all" : categoryName;
      navigate(`/category/${formattedCategory}`);
    };

    const isActive = (categoryName) => {
      if (categoryName === "All Products") return true;
      return false;
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore Cutting-Edge Gadgets</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-2">
              {categories.map((categoryName, index) => (
                <CategoryItem key={index} name={categoryName} active={isActive(categoryName)} onClick={() => handleCategoryClick(categoryName)} />
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && <div className="text-center py-8 text-gray-500">No products found in this category.</div>}
          </div>
        </div>
      </div>
    );
  } else {
    // Redirect to /category/all if no category is selected
    if (!category) {
      return <Navigate to="/home" />;
    }

    const categories = ["All Products", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone"];

    const filteredProducts = category === "all" || category === "All Products" ? productData : productData.filter((product) => product.category === category);

    const handleCategoryClick = (categoryName) => {
      const formattedCategory = categoryName === "All Products" ? "all" : categoryName;
      navigate(`/category/${formattedCategory}`);
    };

    const isActive = (categoryName) => {
      if (category === "all" && categoryName === "All Products") return true;
      return categoryName === category;
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore Cutting-Edge Gadgets</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-2">
              {categories.map((categoryName, index) => (
                <CategoryItem key={index} name={categoryName} active={isActive(categoryName)} onClick={() => handleCategoryClick(categoryName)} />
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && <div className="text-center py-8 text-gray-500">No products found in this category.</div>}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductExplorer;
