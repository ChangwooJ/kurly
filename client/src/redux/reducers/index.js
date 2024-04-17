import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import qnaReducer from './qnaReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  reviews: reviewReducer,
  qnas: qnaReducer,
  users: userReducer
});

export default rootReducer;
