import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  login,
  post,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
