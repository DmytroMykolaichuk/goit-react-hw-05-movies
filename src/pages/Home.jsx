import { fetchTrendMovies } from 'service/appi';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    getTrendMovies();
  }, []);

  async function getTrendMovies() {
    try {
      setStatus('pending');
      const data = await fetchTrendMovies();
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  return (
    <>
      <h1>Trending Today</h1>
      {status === 'responded' && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};

export default Home;
