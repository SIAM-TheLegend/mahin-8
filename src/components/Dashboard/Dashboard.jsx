import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { ActiveTabContext } from "@/contexts/ActiveTabContext";

const Dashboard = () => {
  const { activeTab } = useContext(ActiveTabContext);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const moveToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      removeFromWishlist(product.id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-600 text-white py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant={activeTab === "cart" ? "secondary" : "outline"} onClick={() => setActiveTab("cart")} className={activeTab === "cart" ? "bg-white text-purple-600" : "bg-transparent text-white border-white hover:bg-white/10"}>
            Cart
          </Button>
          <Button variant={activeTab === "wishlist" ? "secondary" : "outline"} onClick={() => setActiveTab("wishlist")} className={activeTab === "wishlist" ? "bg-white text-purple-600" : "bg-transparent text-white border-white hover:bg-white/10"}>
            Wishlist
          </Button>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        {activeTab === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} sortOrder={sortOrder} setSortOrder={setSortOrder} />}
        {activeTab === "wishlist" && <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={moveToCart} sortOrder={sortOrder} />}
      </main>
    </div>
  );
};

export default Dashboard;
