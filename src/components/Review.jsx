import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListReview } from './Review.styled';
import { Circles } from 'react-loader-spinner';
const { useParams } = require('react-router-dom');

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    async function fetchReview(id) {
      try {
        setStatus('pending');
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=352708f90836dd2b75b209ae082e91df&language=en-US`
        );
        setReview(res.data.results);
        setStatus('responded');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchReview(movieId);
  }, [movieId]);
  return (
    <>
      {status === 'responded' && review.length === 0 ? (
        <h2>There are currently no reviews</h2>
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
export default Review;
