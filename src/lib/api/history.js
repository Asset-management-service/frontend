import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/assets/revenueExpenditure`
  : '/api/assets/revenueExpenditure';

export const getHistory = async (year, month) => {
  setToken();
  const { data } = await axios.get(
    `${baseUrl}?month=${year}-${month.toString().padStart(2, '0')}`,
  );
  return data;
};

export const editHistory = async (
  categoryName,
  content,
  cost,
  date,
  paymentMethod,
  revenueExpenditureType,
) => {
  setToken();
  const { data } = await axios.post(`${baseUrl}`, {
    categoryName,
    content,
    cost,
    date,
    paymentMethod,
    revenueExpenditureType,
  });
  return data;
};
