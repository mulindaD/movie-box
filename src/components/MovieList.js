import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  // Base URL for TMDB images
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          {movie.poster_path && (
            <img 
              src={`${imageBaseUrl}${movie.poster_path}`} 
              alt={`${movie.title} poster`}
            />
          )}
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;