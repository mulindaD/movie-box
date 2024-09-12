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
          <p>Runtime: {movie.runtime} Minutes</p>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <button className='flex items-center'>
            <span>Mark as Watched</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
            </svg>
          </button>
          <button className='flex items-center'>
            <span>Bookmark Movie</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.1665 4.16667C4.1665 3.24619 4.9127 2.5 5.83317 2.5H14.1665C15.087 2.5 15.8332 3.24619 15.8332 4.16667V17.5L9.99984 14.5833L4.1665 17.5V4.16667Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;