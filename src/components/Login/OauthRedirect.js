import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import Palette from '../../lib/Palette';
import { loginSuccess } from '../../modules/login';

function OauthRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token');
  useEffect(() => {
    if (token) {
      localStorage.setItem('TOKEN', token);
      dispatch(loginSuccess(token));
    }
    navigate('/moneybook', { replace: true });
  }, []);
  return <Loading mainColor={Palette.gray[8]} text="로그인 중..." />;
}

export default OauthRedirect;
