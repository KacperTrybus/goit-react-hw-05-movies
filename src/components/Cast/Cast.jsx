import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        if (movieId) {
          const { cast } = await getMovieCredits(movieId);
          setCast(cast);
        }
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.length > 0 ? (
        cast.map(actor => (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))
      ) : (
        <p>No cast information available for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
