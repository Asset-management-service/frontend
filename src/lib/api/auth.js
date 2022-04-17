import axios from 'axios';

export const logoutAuth = () => axios.post('/api/logout');
export const setToken = async () => {
  axios.defaults.headers.common['x-access-token'] =
    localStorage.getItem('TOKEN');
  const expiredAt = new Date(localStorage.getItem('EXPIRED_AT'));
  const today = new Date();
  const diffTime = expiredAt.getTime() - today.getTime();
  if (diffTime < 30000) {
    axios.defaults.headers.common['x-refresh-token'] =
      localStorage.getItem('TOKEN'); // refresh token set
    const response = await axios.get('/auth/refresh');
  }
};
