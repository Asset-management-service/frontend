import axios from 'axios';

export const loginAuth = (url, data) => axios.post(url, data);
export const registerAuth = ({}) => axios.post('/api/register', {});
export const logoutAuth = () => axios.post('/api/logout');
