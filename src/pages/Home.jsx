import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=352708f90836dd2b75b209ae082e91df'
    );
    setMovies(res.data.results);
  }

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
