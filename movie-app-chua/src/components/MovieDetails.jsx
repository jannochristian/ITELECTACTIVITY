import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomNav from "../components/NavigationBar";

const API_URL = "https://www.omdbapi.com?apikey=3b0f9411";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="text-center mt-10 text-white">Loading...</div>;
  }

  const trailerUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
    movie.Title + " official trailer"
  )}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pb-20">
      <Link to="/" className="text-white font-bold mb-4 block">
        Back to Home
      </Link>

      <div className="flex flex-col items-center">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.jpg"}
          alt={movie.Title}
          className="rounded-lg shadow-lg w-64 mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>

        <p className="text-gray-400 mb-1">🕒 Duration: {movie.Runtime}</p>
        <p className="text-gray-400 mb-1">Released: {movie.Released}</p>
        <p className="text-gray-400 mb-2">Genre: {movie.Genre}</p>
        <p className="text-gray-300 mb-2 text-center">{movie.Plot}</p>
        <p className="text-gray-400 mb-1">⭐ IMDb Rating: {movie.imdbRating}</p>
        <p className="text-gray-400 mb-1">Cast: {movie.Actors}</p>
        <p className="text-gray-400 mb-4">Director: {movie.Director}</p>

        <div className="w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg mt-4">
          <iframe
            width="100%"
            height="100%"
            src={trailerUrl}
            title={`${movie.Title} Trailer`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
