import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import calender from './calender';
import history from './history';
import comment from './comment';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  login,
  post,
  calender,
  history,
  comment,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
