import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const DetailsMovie = lazy(() => import('../pages/DetailsMovie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

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
        <Route path="*" element={<h1 style={{ color: 'red' }}>НЕ ЧІПАЙ URL</h1>} />
      </Route>
    </Routes>
  );
};
