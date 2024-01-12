import PropTypes from 'prop-types';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useNavigate } from 'react-router-dom';

const MoviePage = ({
  movieDetails,
  cast,
  reviews,
  showCast,
  showReviews,
  onToggleCastInfo,
  onToggleReviewsInfo,
}) => {
  const navigate = useNavigate();
  const handleShowCast = () => {
    onToggleCastInfo();
    navigate(`cast`);
  };

  const handleShowReviews = () => {
    onToggleReviewsInfo();
    navigate(`reviews`);
  };

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>User Score: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>

      <h2>Additional Information</h2>

      <div>
        <button onClick={handleShowCast}>Show Cast</button>
        {showCast && <Cast movieId={movieDetails.id} cast={cast} />}{' '}
      </div>

      <div>
        <button onClick={handleShowReviews}>Show Reviews</button>
        {showReviews && (
          <Reviews movieId={movieDetails.id} reviews={reviews} />
        )}{' '}
      </div>
    </div>
  );
};

MoviePage.propTypes = {
  movieDetails: PropTypes.object.isRequired,
  cast: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  showCast: PropTypes.bool.isRequired,
  showReviews: PropTypes.bool.isRequired,
  onToggleCastInfo: PropTypes.func.isRequired,
  onToggleReviewsInfo: PropTypes.func.isRequired,
};

export default MoviePage;
