import axios from 'axios';
import StyledLink from 'components/Layout.styled';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import LinkBack from 'components/DetailsMovie.styled';
import { Container, ListSubInfo, ContainerSub } from 'components/DetailsMovie.styled';

const DetailsMovie = () => {
  const { movieId } = useParams();

  const [dataMovie, setDataMovie] = useState({});

  useEffect(() => {
    fetchDetailsMovie(movieId);
  }, [movieId]);

  async function fetchDetailsMovie(movieId) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=352708f90836dd2b75b209ae082e91df&language=en-US&external_source=imdb_id`
    );

    setDataMovie(res.data);
  }

  const { title, overview, genres, poster_path, release_date, vote_average } = dataMovie;

  return (
    <>
      <Container>
        <LinkBack>{`<== Back`}</LinkBack>
        <img src={poster_path && `https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
        <div>
          <h1>
            {title}({Number.parseInt(release_date)})
          </h1>
          <p>User score: {vote_average}</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Ganres</b>
          <p>{genres && genres.map(el => el.name).join(', ')}</p>
        </div>
      </Container>
      <ContainerSub>
        <h2>Additional information</h2>
        <ListSubInfo>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ListSubInfo>
      </ContainerSub>
      <Outlet />
    </>
  );
};

export default DetailsMovie;
