import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListCast, Name, ContainerName } from './Cast.styled';
import { Circles } from 'react-loader-spinner';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    async function fetchCast(id) {
      try {
        setStatus('pending');
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=352708f90836dd2b75b209ae082e91df&language=en-US`
        );
        setCast(res.data.cast);
        setStatus('responded');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'responded' && (
        <ListCast>
          {cast.map(({ character, name, profile_path }) => {
            return profile_path ? (
              <li key={name}>
                <div>
                  <img
                    src={profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                  <ContainerName>
                    <Name>{name} </Name>
                    <Name> {character}</Name>
                  </ContainerName>
                </div>
              </li>
            ) : null;
          })}
        </ListCast>
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
export default Cast;
