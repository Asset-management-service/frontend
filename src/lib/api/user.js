import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/users`
  : '/api/users';

export const getUserCommunityInfo = async (category, page = 0) => {
  setToken();
  let url;
  if (category === 'post') {
    url = `${baseUrl}/mypage/posts`;
  } else if (category === 'comment') {
    url = `${baseUrl}/mypage/comments`;
  } else {
    // scrap
    url = `${baseUrl}/mypage/posts`;
  }
  const { data } = await axios.get(`${url}?page=${page}`);
  return data;
};
