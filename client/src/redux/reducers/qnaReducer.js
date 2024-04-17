import { FETCH_QNAS } from '../actions/type';

const initialState = {
  qnas: []
};

const qnaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QNAS:
      return {
        ...state,
        qnas: action.payload
      };
    default:
      return state;
  }
};

export default qnaReducer;
