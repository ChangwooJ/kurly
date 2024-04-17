import { FETCH_REVIEWS } from '../actions/type';

const initialState = {
  reviews: []
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    default:
      return state;
  }
};

export default reviewReducer;
