import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (movieId) {
          const { results } = await getMovieReviews(movieId);
          setReviews(results);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We have no reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
