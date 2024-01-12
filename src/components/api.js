// const API_KEY = '916f9ff38cc99a805ae2d8d4bd7b1cde';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTZmOWZmMzhjYzk5YTgwNWFlMmQ4ZDRiZDdiMWNkZSIsInN1YiI6IjY1OWVkZjI3ZDY1OTBiMDE0YTI4ZDhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C2uuUeyz7GqkJq9PWrG8HkxkBa9XF0lPh2TJLfHPisg';

export async function getTrendingMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/week',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function searchMovies(keyword) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function getMovieCredits(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}

export async function getMovieReviews(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}
