import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="movie-poster w-full h-64 object-cover rounded-t-lg"
          />
      ) : (
          <div className="movie-poster h-64 bg-gray-300 flex items-center justify-center rounded-t-lg">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </Link>
      <div className="movie-info mt-4">
        <h3 className="movie-title text-lg font-semibold text-gray-800 truncate">
          {movie.title}
        </h3>
        <p className="movie-rating text-sm text-gray-600">
          Rating: {movie.vote_average}
        </p>
        <p className="movie-release-date text-sm text-gray-600">
          Release Date: {movie.release_date}
        </p>
        <Link
          to={`/movie/${movie.id}`}
          className="view-details text-rose-500 hover:text-rose-700 mt-2 inline-block text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
