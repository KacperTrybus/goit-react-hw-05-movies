import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/api';
import PropTypes from 'prop-types';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await getMovieCredits(movieId);
      setCast(cast);
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.map(actor => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;
