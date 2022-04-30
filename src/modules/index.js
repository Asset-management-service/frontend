import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import calender from './calender';
import history from './history';
import comment from './comment';
import budget from './budget';
import category from './category';
import expense from './expense';

const rootReducer = combineReducers({
  login,
  post,
  calender,
  history,
  comment,
  budget,
  category,
  expense,
});
export default rootReducer;
