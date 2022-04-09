import { combineReducers } from 'redux';
import login from './login';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  login,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
