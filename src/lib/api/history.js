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

export const postHistory = async (
  categoryName,
  assetCategoryType,
  content,
  cost,
  paymentMethod,
  year,
  month,
  date,
  revenueExpenditureType,
) => {
  setToken();
  const { data } = await axios.post(baseUrl, {
    categoryName,
    assetCategoryType,
    content,
    cost,
    paymentMethod,
    revenueExpenditureType,
    date: `${year}-${month.toString().padStart(2, '0')}-${date
      .toString()
      .padStart(2, '0')}`,
  });
  return data;
};

export const editHistory = async (
  categoryName,
  assetCategoryType,
  content,
  cost,
  year,
  month,
  date,
  paymentMethod,
  revenueExpenditureType,
  revenueExpenditureId,
) => {
  setToken();
  let payment = paymentMethod;
  if (revenueExpenditureType === 'REVENUE') payment = '';
  const { data } = await axios.patch(`${baseUrl}`, {
    assetCategoryType,
    categoryName,
    content,
    cost,
    date: `${year}-${month.toString().padStart(2, '0')}-${date
      .toString()
      .padStart(2, '0')}`,
    paymentMethod: payment,
    revenueExpenditureType,
    revenueExpenditureId,
  });
  return data;
};

export const deleteHistory = async (id) => {
  setToken();
  const { data } = await axios.delete(`${baseUrl}/${id}`);
  return data;
};
