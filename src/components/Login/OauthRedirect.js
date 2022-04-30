import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import { loginSuccess } from '../../modules/login';
import { setToken } from '../../lib/api/auth';

function OauthRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token');
  useEffect(() => {
    if (token) {
      const today = new Date();
      today.setMinutes(today.getMinutes() + 30);
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
      localStorage.setItem(process.env.REACT_APP_EXPIRED_AT_KEY, today);
      dispatch(loginSuccess(token));
      setToken();
    }
    navigate('/financial', { replace: true });
  }, []);
  return <Loading mainColor={'black'} text="로그인 중..." />;
}

export default OauthRedirect;
