import DetailsMovie from 'pages/DetailsMovie';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Review from './Review';
import Movies from 'pages/Movies';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<DetailsMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
