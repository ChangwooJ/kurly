import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import reviewReducer from './reviewReducer';
import qnaReducer from './qnaReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  reviews: reviewReducer,
  qnas: qnaReducer,
  users: userReducer,
  logins: loginReducer
});

export default rootReducer;
