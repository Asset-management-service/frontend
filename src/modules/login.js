import { loginAuth } from '../lib/api/auth';

const LOADING = 'login/LOADING';
const LOGIN_SUCCESS = 'login/SUCCESS';
const LOGIN_FAILURE = 'login/FAILURE';
const LOGOUT = 'login/LOGOUT';

export const loading = () => ({
  type: LOADING,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const userLogin = (url, data) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const response = await loginAuth(url, data);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    dispatch(loginFailure(e));
  }
};

const initialState = {
  loading: false,
  auth: null,
  authError: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        auth: action.data,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        auth: null,
        authError: action.error,
      };
    case LOGOUT:
      return {
        loading: false,
        auth: null,
        authError: null,
      };
    default:
      return state;
  }
};

export default login;
