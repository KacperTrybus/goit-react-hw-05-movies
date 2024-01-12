import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ searchResults, setSelectedMovie }) => {
  const handleSelectMovie = movieId => {
    setSelectedMovie(movieId);
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {searchResults.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  onClick={() => handleSelectMovie(movie.id)}
                >
                  {movie.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default Home;
