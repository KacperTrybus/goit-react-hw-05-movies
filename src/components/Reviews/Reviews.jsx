import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/api';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { results } = await getMovieReviews(movieId);
      setReviews(results);
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

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;
