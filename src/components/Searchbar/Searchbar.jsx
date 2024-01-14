import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    onSearch(searchTerm);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
