// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default Menu;
