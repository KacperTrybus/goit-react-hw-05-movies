import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../Searchbar/Searchbar';

export const Movies = ({
  searchResults,
  setSelectedMovie,
  onSearch,
  showSearchBarOnly,
}) => {
  const navigate = useNavigate();

  const handleSelectMovie = movieId => {
    setSelectedMovie(movieId);
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <h2>Movies</h2>
      <SearchBar onSearch={onSearch} />
      {!showSearchBarOnly && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                onClick={() => handleSelectMovie(movie.id)}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Movies.propTypes = {
  searchResults: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  showSearchBarOnly: PropTypes.bool.isRequired,
};

export default Movies;
