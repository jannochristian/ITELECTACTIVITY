import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="text-center bg-gray-900 text-white mt-20">
        No favorites yet ❤️ <br /> Start adding your favorite movies!
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('/battlefield-bg.jpg')`,
      }}
    >
      <h1 className="text-2xl font-bold text-white mb-6">My Favorite Movies ❤️</h1>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-6 w-full max-w-7xl justify-items-center">
        {favorites.map((movie) => (
          <Link
            key={movie.imdbID}
            to={`/movie/${movie.imdbID}`}
            className="bg-sky-900 bg-opacity-80 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
              alt={movie.Title}
              className="w-52 h-80 object-cover"
            />
            <div className="p-3 text-center">
              <h2 className="font-semibold text-white text-sm">{movie.Title}</h2>
              <p className="text-white text-xs">{movie.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
