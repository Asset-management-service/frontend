import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/settlements`
  : '/api/settlements';

export const getWeekStatistic = (year, month, date, detail = undefined) => {
  const queryDate = `=${year}-${String(month).padStart(2, '0')}-${String(
    date,
  ).padStart(2, '0')}`;
  setToken();
  if (detail) {
    const data = axios.get(`${baseUrl}/week/detail?date=${queryDate}`);
    return data;
  } else {
    const { data } = axios.get(`${baseUrl}/week/?date=${queryDate}&type=left`);
    return data;
  }
};
