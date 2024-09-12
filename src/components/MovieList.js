import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  // Base URL for TMDB images
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card rounded-lg shadow-sm overflow-hidden">
          {movie.poster_path && (
            <img 
              src={`${imageBaseUrl}${movie.poster_path}`} 
              alt={`${movie.title} poster`}
            />
          )}
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2 truncate'>{movie.title}</h3>
            <p className='text-sm text-gray-600 mb-2'>Release Date: {movie.release_date}</p>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-700">IMDB Rating:   </span>
              <span className="text-sm font-bold text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-700">{movie.vote_average.toFixed(1)}/10</span>
            </div>
            <Link 
                to={`/movie/${movie.id}`}
                className='block text-center bg-rose-700 text-white py-2 px-4 rounded hover:bg-rose-900 transition duration-300'
            >
                View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;