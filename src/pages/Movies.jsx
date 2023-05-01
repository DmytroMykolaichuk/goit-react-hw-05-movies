import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Input, Button } from 'components/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchQuery(query);
    }
  }, [searchParams]);

  function onSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value ? { query: e.target.query.value } : {};
    setSearchParams(query);
  }

  async function fetchQuery(query) {
    try {
      setStatus('pending');
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=352708f90836dd2b75b209ae082e91df&language=en-US&page=1&include_adult=false&query=${query}`
      );
      setMovies(res.data.results);
      setStatus('responded');
    } catch (error) {
      console.log(error);
      setStatus('rejected');
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="text" name="query" placeholder="Search..." />
        <Button type="submit">Search</Button>
      </form>
      {status === 'responded' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === 'pending' && (
        <Circles
          height="80"
          width="80"
          color="#f8a100"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};
export default Movies;
