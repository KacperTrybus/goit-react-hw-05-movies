import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ searchResults }) => {
  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {searchResults.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default Home;
