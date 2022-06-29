import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/settlements`
  : '/api/settlements';

export const getWeekStatistic = async (date, detail = undefined) => {
  setToken();
  if (detail) {
    const { data } = await axios.get(`${baseUrl}/week/detail?date=${date}`);
    return data;
  } else {
    const { data } = await axios.get(`${baseUrl}/week?date=${date}&type=left`);
    return data;
  }
};

export const getMonthStatistic = async (date, detail = undefined) => {
  setToken();
  if (detail) {
    const { data } = await axios.get(
      `${baseUrl}/detail?date=${date}&type=month`,
    );
    return data;
  } else {
    const { data } = await axios.get(`${baseUrl}/month?date=${date}&type=left`);
    return data;
  }
};

export const getYearStatistic = async (date, detail = undefined) => {
  setToken();
  if (detail) {
    const { data } = await axios.get(
      `${baseUrl}/detail?date=${date}&type=year`,
    );
    return data;
  } else {
    const { data } = await axios.get(`${baseUrl}/year?date=${date}&type=LEFT`);
    return data;
  }
};

export const compareStatistic = async (date, type) => {
  setToken();
  if (type === 'month') {
    const { data } = await axios.get(
      `${baseUrl}/month/comparison?date=${date}`,
    );
    return data;
  } else {
    const { data } = await axios.get(`${baseUrl}/year/comparison?date=${date}`);
    return data;
  }
};
