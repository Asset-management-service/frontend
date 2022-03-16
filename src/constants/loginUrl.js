import qs from 'qs';

const googleQuery = qs.stringify({
  response_type: 'code',
  redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  scope: `https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`,
});

export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?${googleQuery}`;

const kakaoQuery = qs.stringify({
  client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  response_type: 'code',
  prompt: 'login',
});

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?${kakaoQuery}`;

const naverQuery = qs.stringify({
  response_type: 'code',
  client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_NAVER_REDIRECT_URI,
});

export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?${naverQuery}`;
