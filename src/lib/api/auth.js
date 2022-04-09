import axios from 'axios';

export const loginOauth = (url) => axios.get(url);
export const registerAuth = ({}) => axios.post('/api/register', {});
export const logoutAuth = () => axios.post('/api/logout');
