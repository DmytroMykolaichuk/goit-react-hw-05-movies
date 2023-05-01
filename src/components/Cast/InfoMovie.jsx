import PropTypes from 'prop-types';
import { Container } from 'components/SubPageList/DetailsMovie.styled';
import LinkBack from 'components/SubPageList/DetailsMovie.styled';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const InfoMovie = ({ title, genres, poster_path, release_date, vote_average, overview }) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <Container>
      <LinkBack to={backLinkRef.current}>{`<== Back`}</LinkBack>
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
  );
};

InfoMovie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
