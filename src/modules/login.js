import { loginOauth } from '../lib/api/auth';

const INITIALIZE = 'login/INITIALIZE';
const LOADING = 'login/LOADING';
const LOGIN_SUCCESS = 'login/SUCCESS';
const LOGIN_FAILURE = 'login/FAILURE';
const LOGOUT = 'login/LOGOUT';

export const initialize = () => ({
  type: INITIALIZE,
});

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

export const socialLogin = (url) => async (dispatch) => {
  dispatch(loading(true));
  try {
    await loginOauth(url);
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
    case INITIALIZE:
      return {
        ...state,
        loading: false,
        authError: null,
      };
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
