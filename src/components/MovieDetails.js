import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

function MovieDetails() {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  // Base URL for TMDB images
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          {movie.poster_path && (
            <img 
              src={`${imageBaseUrl}${movie.poster_path}`} 
              alt={`${movie.title} poster`}
            />
          )}
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;