import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({ changePage }) => {
  return (
    <nav>
      <Link to="/" onClick={() => changePage('home')}>
        Home
      </Link>
      <Link to="/movies" onClick={() => changePage('movies')}>
        Movies
      </Link>
    </nav>
  );
};

Menu.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Menu;
