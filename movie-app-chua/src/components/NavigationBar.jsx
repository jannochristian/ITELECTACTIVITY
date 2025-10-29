import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, User } from "lucide-react"; // simple icons

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Favorites", path: "/favorites", icon: <Heart size={20} /> },
  ];

  <Link to="/favorites" className="flex flex-col items-center text-white">
    <span>❤️</span>
    <span className="text-xs">Favorites</span>
  </Link>


  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-sky-900 bg-opacity-90 text-white flex justify-around items-center py-2 shadow-lg backdrop-blur-md z-50">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex flex-col items-center text-xs ${
            location.pathname === item.path ? "text-white" : "text-white"
          }`}
        >
          {item.icon}
          <span className="mt-1">{item.name}</span>
        </Link>

      ))}
    </nav>
  );
}
