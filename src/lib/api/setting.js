import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/assets`
  : '/api/assets';

export const getSettingCategory = async (categoryType) => {
  setToken();
  const { data } = await axios.get(
    `${baseUrl}/category?categoryType=${categoryType}`,
  );
  return data;
};

export const postSettingCategory = async (categoryType, categoryName) => {
  setToken();
  const { data } = await axios.post(`${baseUrl}/category`, {
    categoryName,
    categoryType,
  });
  return data;
};

export const deleteSettingCategory = async (categoryId) => {
  setToken();
  const { data } = await axios.delete(`${baseUrl}/category/${categoryId}`);
  return data;
};

export const putAssetExpenditureRatio = async (fixed, variable) => {
  setToken();
  const { data } = await axios.put(`${baseUrl}/expenditure`, {
    fixed,
    variable,
  });
  return data;
};

export const getAssetExpenditureRatio = async () => {
  setToken();
  const { data } = await axios.get(`${baseUrl}/expenditure`);
  return data;
};

export const putAssetBudget = async (budgetAmount) => {
  setToken();
  const { data } = await axios.put(`${baseUrl}/budget`, {
    budgetAmount,
  });
  return data;
};

export const getAssetBudget = async () => {
  setToken();
  const { data } = await axios.get(`${baseUrl}/budget`);
  return data;
};

export const putAssetGoal = async (content, year, month) => {
  setToken();
  const { data } = await axios.put(`${baseUrl}/asset-goal`, {
    content,
    date: `${year}-${String(month).padStart(2, '0')}-01`,
  });
  return data;
};

export const getAssetGoal = async (year, month) => {
  setToken();
  const { data } = await axios.get(
    `${baseUrl}/asset-goal?date=${year}-${String(month).padStart(2, '0')}-01`,
  );
  return data;
};
