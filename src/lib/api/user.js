import axios from 'axios';
import { useQueryClient } from 'react-query';
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
    url = `${baseUrl}/mypage/scraps`;
  }

  const { data } = await axios.get(`${url}?page=${page}`);
  return data;
};

//개인정보 조회
export const getUsers = async (id) => {
  const { data } = await axios.get(`${baseUrl}/users?id=${id}`);
    return data;
};

//개인정보 수정
export const patchUsers= async (id) => {
  const { data } = await axios.patch(`${baseUrl}/users?id=${id}`,{
    email,
    gender,
    nickname,
    phoneNum
  });
  return data;
};

//이메일 중복 확인
export const getUserEmailCheck = async (email) => {
  const { data } = await axios.get(`${baseUrl}/emailCheck?email=${email}`);
  if(data === true){
    alert('중복된 이메일입니다!')
  }
  else{
    return data;
};

//이메일 인증
export const getRegisterEmail = async (email) => {
  setToken();
  const { data } = await axios.get(`${baseUrl}/RegisterEmail?email=${email}`);
  return data;
};