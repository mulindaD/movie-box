import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';

function Reviews() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const searchMovies = async () => {
    if (searchTerm) {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results)
    }
  };

  const fetchReviews = async () => {
    const response = await fetch(`${process.env.REACT_APP_DB_BASE_URL}/reviews`);
    const data = await response.json();
    setReviews(data);
  };

  const handleAddReview = async () => {
    if (newReview.trim() !== '' && selectedMovie) {
      const review = {
        movieId: selectedMovie.id,
        movieTitle: selectedMovie.title,
        content: newReview,
        date: new Date().toISOString()
      };

      const response = await fetch(`${process.env.REACT_APP_DB_BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (response.ok) {
        setNewReview('');
        fetchReviews();  // Refresh the reviews list
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Movie Reviews</h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie to review..."
          className="w-full md:w-2/3 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose"
        />
        <button 
          onClick={searchMovies}
          className="bg-rose text-white p-2 rounded-r-md hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-rose"
        >
          Search
        </button>
      </div>

      {movies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Select a movie to review:</h2>
          <div className="space-y-2">
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className={`p-2 rounded cursor-pointer ${
                  selectedMovie && selectedMovie.id === movie.id 
                    ? 'bg-rose text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedMovie(movie)}
              >
                {movie.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedMovie && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add a review for {selectedMovie.title}</h2>
          <textarea
            rows="4"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
          />
          <button 
            onClick={handleAddReview}
            className="mt-2 bg-rose text-white p-2 rounded-md hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-200"
          >
            Submit Review
          </button>
        </div>
      )}

      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Reviews;