import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold">{review.movieTitle}</h3>
            <p className="text-gray-600 mt-2">{review.content}</p>
            <small className="text-gray-400">{new Date(review.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewList;