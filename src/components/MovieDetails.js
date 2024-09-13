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
    <div className="movie-details container mx-auto px-4 py-8">
      {isPending && <div className='text-center text-gray-600'>Loading...</div>}
      {error && <div className='text-center text-red-600'>{error}</div>}
      {movie && (
        <div className='Movie Details'>
          <h1 className='text-4xl font-bold mb-8'>{movie.title}</h1>
          <div className="movie-details-card flex flex-col md:flex-row gap-8">
            <div className='movie-poster w-full md:w-1/3'>
                {movie.poster_path && (
                    <img 
                        src={`${imageBaseUrl}${movie.poster_path}`} 
                        alt={`${movie.title} poster`}
                        className='w-full rounded-lg shadow-lg'
                    />
                )}
            </div>
           <div className='movie-details-section w-full md:w-2/3'>
                <h2 className='text-2xl font-bold mb-8'>{movie.title}</h2>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {movie.genres.map(genre => (
                        <span key={genre.id} className='px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm'>{genre.name}</span>
                            )
                        )
                    }
                </div>
        
                <p className='text-gray-600 mb-4'>Release Date: {movie.release_date}</p>

                <div className='flex items-center space-x-2 mb-4'>
                    <img src="../../assets/imdb.png" alt="imdb logo" className='h-6'/>
                    <p className='font-bold'>Rating: {movie.vote_average.toFixed(1)}</p>
                    <p className="text-gray-600">({movie.vote_count} votes)</p>
                </div>

                <p className='text-gray-600 mb-4'>Runtime: {movie.runtime} Minutes</p>
                <p className='text-gray-800 mb-6'>{movie.overview}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className='flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 ease-in-out'>
                        <span className='mr-2'>Mark as Watched</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827"/>
                        </svg>
                    </button>
                    <button className='flex items-center justify-center px-4 py-2 bg-rose text-white rounded-md hover:bg-rose-900 transition duration-150 ease-in-out'>
                        <span className='mr-2'>Bookmark Movie</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.1665 4.16667C4.1665 3.24619 4.9127 2.5 5.83317 2.5H14.1665C15.087 2.5 15.8332 3.24619 15.8332 4.16667V17.5L9.99984 14.5833L4.1665 17.5V4.16667Z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
           </div>
            
          </div>
         
        </div>
      )}
    </div>
  );
}

export default MovieDetails;