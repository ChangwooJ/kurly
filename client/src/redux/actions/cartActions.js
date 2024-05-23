import axios from 'axios';
import { FETCH_CARTS } from './type';

export const fetchCarts = () => {
  return async dispatch => {
    const response = await axios.get('http://localhost:8000/api/carts')
    const carts = response.data;
    dispatch({
        type: FETCH_CARTS,
        payload: carts
    });
  };
};
