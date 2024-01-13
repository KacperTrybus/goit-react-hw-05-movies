import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';

const MoviePage = ({
  movieDetails,
  cast,
  reviews,
  showCast,
  showReviews,
  onToggleCastInfo,
  onToggleReviewsInfo,
}) => {
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

      <ul>
        <li>
          <Link
            to="cast"
            // onClick={onToggleCastInfo}
          >
            Show Cast
          </Link>
        </li>

        <li>
          <Link to="reviews">Show Reviews</Link>
        </li>
      </ul>
      {/* {showCast && <Cast movieId={movieDetails.id} />} */}
      <Outlet />
    </div>
  );
};

MoviePage.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};

export default MoviePage;
