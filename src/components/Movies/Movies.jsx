import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../Searchbar/Searchbar';

export const Movies = ({ searchResults, onSearch }) => {
  return (
    <div>
      <h2>Movies</h2>
      <SearchBar onSearch={onSearch} />

      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Movies;
