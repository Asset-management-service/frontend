import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/auth`
  : '/api/auth';

export const logoutAuth = async () => {
  setToken();
  const { data } = await axios.post(`${baseUrl}/logout`);
  return data;
};
export const setToken = async () => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const expiredAt = new Date(
    localStorage.getItem(process.env.REACT_APP_EXPIRED_AT_KEY),
  );
  const today = new Date();
  const diffTime = expiredAt.getTime() - today.getTime();
  if (diffTime <= 30000) {
    const { data } = await axios.get(`${baseUrl}/reissue`, {
      withCredentials: true,
    });
    today.setMinutes(today.getMinutes() + 30);
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, data.accessToken);
    localStorage.setItem(process.env.REACT_APP_EXPIRED_AT_KEY, today);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.accessToken}`;
  }
};
