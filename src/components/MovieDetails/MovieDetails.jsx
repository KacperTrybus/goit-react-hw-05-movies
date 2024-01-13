// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/api';
import { useParams } from 'react-router-dom';
import MoviePage from 'components/MoviePage/MoviePage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <MoviePage movieDetails={movieDetails} movieId={movieId} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// MovieDetails.propTypes = {
//   goBack: PropTypes.func.isRequired,
// };

export default MovieDetails;
