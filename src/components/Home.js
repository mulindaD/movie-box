import React from 'react';
import MovieList from './MovieList';
import useFetch from './useFetch'; // Custom Hook to handle fetches

function Home({ searchTerm }) {
    const { data: movies, error, isPending } = useFetch(
      `${process.env.REACT_APP_API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`,
      searchTerm ? `${process.env.REACT_APP_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}` : null
    );
    console.log(movies)
    
    return (
      <div className="home">
        <h2>Welcome to Movie Box</h2>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {movies && <MovieList movies={movies.results} />}
      </div>
    );
  }
  
  export default Home;