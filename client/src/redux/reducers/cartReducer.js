import { FETCH_CARTS } from '../actions/type';

const initialState = {
  carts: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARTS:
      return {
        ...state,
        carts: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
