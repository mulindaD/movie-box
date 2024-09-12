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
      <div className="container mx-auto px-4 py-8">
        <h2 className='text-3xl font-bold mb-4'>Discover Movies</h2>
        <h3 className='text-xl text-gray-600 mb-6'>Some of the popular movies today</h3>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        {isPending && <div className='text-gray-500 mb-4'>Loading...</div>}
        {movies && <MovieList movies={movies.results} />}
      </div>
    );
  }
  
  export default Home;