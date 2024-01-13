import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const MoviePage = ({ movieDetails }) => {
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
          <Link to="cast">Show Cast</Link>
        </li>

        <li>
          <Link to="reviews">Show Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

MoviePage.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};

export default MoviePage;
