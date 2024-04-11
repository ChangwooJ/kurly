import axios from 'axios';
import { FETCH_ITEMS } from './type';

export const fetchItems = () => {
  return dispatch => {
    axios.get('http://localhost:8000/api/item')
      .then(response => {
        const items = response.data;
        dispatch({
          type: FETCH_ITEMS,
          payload: items
        });
      })
  };
};
