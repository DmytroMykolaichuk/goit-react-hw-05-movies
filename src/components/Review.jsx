import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListReview } from './Review.styled';
const { useParams } = require('react-router-dom');

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    async function fetchReview(id) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=352708f90836dd2b75b209ae082e91df&language=en-US`
      );
      setReview(res.data.results);
    }
    fetchReview(movieId);
  }, [movieId]);
  return (
    <>
      {review.length === 0 ? (
        <div>There are currently no reviews</div>
      ) : (
        <ListReview>
          {review.map(({ author, content, id, author_details: { rating } }) => {
            return (
              <li key={id}>
                {
                  <>
                    <b>{author}</b>
                    <p>Rating: {rating ? rating : 'There are currently no ratings'}</p>
                    <p>{content}</p>
                  </>
                }
              </li>
            );
          })}
        </ListReview>
      )}
    </>
  );
};
export default Review;
