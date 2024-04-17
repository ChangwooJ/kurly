import axios from 'axios';
import { FETCH_USERS } from './type';

export const fetchUsers = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/api/users`)
      .then(response => {
        const users = response.data;
        dispatch({
          type: FETCH_USERS,
          payload: users
        });
      })
  };
};
