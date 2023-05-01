import { fetchCastMovie } from 'service/appi';
import { useEffect, useState } from 'react';
import { ListCast, Name, ContainerName } from './Cast.styled';
import { Loader } from 'components/Loader';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    async function getCastMovie(movieId) {
      try {
        setStatus('pending');
        const data = await fetchCastMovie(movieId);
        setCast(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    }
    getCastMovie(movieId);
  }, [movieId]);
  return (
    <>
      {status === 'responded' && (
        <ListCast>
          {cast.map(({ character, name, profile_path, cast_id }) => {
            return (
              <li key={cast_id}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : 'https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg'
                    }
                    width="200"
                    alt={name}
                  />
                  <ContainerName>
                    <Name>{name} </Name>
                    <Name> {character}</Name>
                  </ContainerName>
                </div>
              </li>
            );
          })}
        </ListCast>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
  );
};
export default Cast;
