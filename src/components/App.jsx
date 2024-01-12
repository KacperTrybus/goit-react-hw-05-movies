import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getTrendingMovies, searchMovies } from './api';
import Menu from './Menu/Menu';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  const [setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrendingMovies();
      setTrendingMovies(trending.results);
    };

    fetchTrending();
  }, []);

  const handleSearch = async keyword => {
    if (keyword) {
      const { results } = await searchMovies(keyword);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Router basename="/goit-react-hw-05-movies">
      <div>
        <Menu />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchResults={trendingMovies}
                  setSelectedMovie={setSelectedMovie}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  searchResults={searchResults}
                  setSelectedMovie={setSelectedMovie}
                  onSearch={handleSearch}
                />
              }
            />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
