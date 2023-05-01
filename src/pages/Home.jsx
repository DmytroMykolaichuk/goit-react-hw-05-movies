import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    fetchData();
  }, []);
  const location = useLocation();

  async function fetchData() {
    try {
      setStatus('pending');
      const res = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=352708f90836dd2b75b209ae082e91df'
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
      <h1>Trending Today</h1>
      {status === 'responded' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
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

export default Home;
