import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/assets/money-log`
  : '/api/assets/money-log';

export const getMoneyLog = async (year, month, date) => {
  setToken();
  const { data } = await axios.get(
    `${baseUrl}?date=${year}-${String(month).padStart(2, '0')}-${String(
      date,
    ).padStart(2, '0')}`,
  );
  return data;
};

export const postMoneyLog = async (content, imageFiles, year, month, date) => {
  const formData = new FormData();
  formData.append('content', content);
  formData.append(
    'date',
    `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(
      2,
      '0',
    )}`,
  );
  if (imageFiles.length != 0) {
    imageFiles.forEach((file) => formData.append('imageFiles', file.image));
  }
  setToken();
  const { data } = await axios.post(baseUrl, formData);
  return data;
};

export const editMoneyLog = async (
  content,
  imageFiles,
  moneyLogId,
  year,
  month,
  date,
  saveImageUrl,
) => {
  const formData = new FormData();
  formData.append('moneyLogId', moneyLogId);
  formData.append('content', content);
  formData.append(
    'date',
    `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(
      2,
      '0',
    )}`,
  );
  if (saveImageUrl.length != 0) {
    saveImageUrl.forEach((image) =>
      formData.append('saveImageUrl', image.image),
    );
  }
  if (imageFiles.length != 0) {
    imageFiles.forEach((file) => formData.append('imageFiles', file.image));
  }
  setToken();
  const { data } = await axios.patch(baseUrl, formData);
  return data;
};

export const getRevenueExpenditure = async (year, month, date) => {
  setToken();
  const { data } = await axios.get(
    `${baseUrl}/revenue-expenditure?date=${year}-${String(month).padStart(
      2,
      '0',
    )}-${String(date).padStart(2, '0')}`,
  );
  return data;
};
