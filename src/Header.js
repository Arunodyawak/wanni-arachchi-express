import { useState } from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";


export default function Header() {
  const [cartCount, setCartCount] = useState(2); // example cart item count

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          Wanni Arachchi<span className="text-pink-500">-express</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Shop</a>
          <a href="#" className="hover:text-indigo-600">About Us</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </nav>

        {/* Right Side: Search + Cart + Account */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-indigo-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* User Icon */}
          <FaUser className="text-xl text-gray-700 hover:text-indigo-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
