import axios from 'axios';
import { FETCH_REVIEWS } from './type';

export const fetchReviews = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/api/reviews`)
      .then(response => {
        const reviews = response.data;
        dispatch({
          type: FETCH_REVIEWS,
          payload: reviews
        });
      })
  };
};
