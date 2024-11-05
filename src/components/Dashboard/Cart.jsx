import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Cart = ({ cart, removeFromCart, sortOrder, setSortOrder }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(",", "")), 0).toFixed(2);
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(",", ""));
      const priceB = parseFloat(b.price.replace(",", ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex items-center gap-4">
          <div className="text-xl">Total cost: ${calculateTotal()}</div>
          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-purple-600 hover:bg-purple-700">Purchase</Button>
        </div>
      </div>
      <div className="space-y-4">
        {sortItems(cart).map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-2">Price: ${item.price}</div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
              <X className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
