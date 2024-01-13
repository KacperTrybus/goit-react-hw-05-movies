import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from 'components/api';
import { useParams } from 'react-router-dom';
import MoviePage from 'components/MoviePage/MoviePage';
import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [showCastInfo, setShowCastInfo] = useState(false);
  // const [showReviewsInfo, setShowReviewsInfo] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);

      const { cast } = await getMovieCredits(movieId);
      setCast(cast);

      const { results } = await getMovieReviews(movieId);
      setReviews(results);
    };

    fetchMovieDetails();
  }, [movieId]);

  // const handleToggleCastInfo = () => {
  //   setShowCastInfo(!showCastInfo);
  //   console.log('Toggle Cast Info');
  // };

  // const handleToggleReviewsInfo = () => {
  //   setShowReviewsInfo(!showReviewsInfo);
  // };

  return (
    <div>
      {movieDetails ? (
        <MoviePage
          movieDetails={movieDetails}
          cast={cast}
          reviews={reviews}
          movieId={movieId}
          // showCast={showCastInfo}
          // showReviews={showReviewsInfo}
          // onToggleCastInfo={handleToggleCastInfo}
          // onToggleReviewsInfo={handleToggleReviewsInfo}
        />
      ) : (
        <p>Loading...</p>
      )}
      {/* <Cast movieId={movieId} /> */}
      {/* <Reviews movieId={movieId} /> */}
    </div>
  );
};

MovieDetails.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default MovieDetails;
