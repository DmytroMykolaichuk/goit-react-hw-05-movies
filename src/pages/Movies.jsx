import { fetchQueryMovies } from 'service/appi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button } from 'components/Movies.styled';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      getQueryMovies(query);
    }
  }, [searchParams]);

  function onSubmit(e) {
    e.preventDefault();
    const { value } = e.target.query;
    const query = value.trim() ? { query: value } : {};
    setSearchParams(query);
  }

  async function getQueryMovies(query) {
    try {
      setStatus('pending');
      const data = await fetchQueryMovies(query);
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="text" name="query" placeholder="Search..." />
        <Button type="submit">Go</Button>
      </form>
      {status === 'responded' && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};
export default Movies;
