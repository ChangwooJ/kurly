import axios from 'axios';
import { FETCH_QNAS } from './type';

export const fetchQnas = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/api/qnas`)
      .then(response => {
        const qnas = response.data;
        dispatch({
          type: FETCH_QNAS,
          payload: qnas
        });
      })
  };
};
