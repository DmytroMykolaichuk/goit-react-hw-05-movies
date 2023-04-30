import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListCast, Name } from './Cast.styled';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchCast(id) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=352708f90836dd2b75b209ae082e91df&language=en-US`
      );
      setCast(res.data.cast);
    }
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      <ListCast>
        {cast.map(({ character, name, profile_path }) => {
          return (
            <li key={name}>
              <div>
                <img
                  src={profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
                <div>
                  <Name>{name} </Name>
                  <Name> {character}</Name>
                </div>
              </div>
            </li>
          );
        })}
      </ListCast>
    </>
  );
};
export default Cast;
