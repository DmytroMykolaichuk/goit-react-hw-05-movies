import { fetchDetailsMovie } from 'service/appi';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { InfoMovie } from 'components/Cast/InfoMovie';
import { SubPageList } from 'components/SubPageList/SubPageList';

const DetailsMovie = () => {
  const { movieId } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    getDetailsMovie(movieId);
  }, [movieId]);

  async function getDetailsMovie(movieId) {
    try {
      setStatus('pending');
      const data = await fetchDetailsMovie(movieId);
      setDataMovie(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }

  const { title, overview, genres, poster_path, release_date, vote_average } = dataMovie;

  return (
    <>
      {status === 'responded' && (
        <>
          <InfoMovie
            genres={genres}
            title={title}
            overview={overview}
            vote_average={vote_average}
            poster_path={poster_path}
            release_date={release_date}
          />
          <SubPageList />
        </>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DetailsMovie;
