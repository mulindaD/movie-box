import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';
import useFetch from './useFetch';

function Home({ searchTerm }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [allMovies, setAllMovies] = useState([]);

    const { data, error, isPending } = useFetch(
      searchTerm 
        ? `${process.env.REACT_APP_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${currentPage}`
        : `${process.env.REACT_APP_API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`
    );

    useEffect(() => {
      if (data) {
        setAllMovies(prevMovies => [...prevMovies, ...data.results]);
        setTotalPages(data.total_pages);
      }
    }, [data]);

    useEffect(() => {
      setAllMovies([]);
      setCurrentPage(1);
    }, [searchTerm]);

    const loadMore = () => {
      if (currentPage < totalPages) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className='text-3xl font-bold mb-4'>
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Discover Movies'}
        </h2>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        {isPending && <div className='text-gray-500 mb-4'>Loading...</div>}
        {allMovies.length > 0 && <MovieList movies={allMovies} />}
        
        <div className="flex justify-center mt-8">
          {currentPage < totalPages && (
          <button 
              onClick={loadMore}
              className="mt-4 bg-rose hover:bg-rose-900 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
          )}
        
          {currentPage === totalPages && (
            <p className="mt-4 text-gray-500">No more movies to load.</p>
          )}
        </div>
        
      </div>
    );
  }
  
  export default Home;