import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import Palette from '../../lib/Palette';
import { userLogin } from '../../modules/login';

function OauthRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = useState(params.get('code'));
  const error = useState(params.get('error'));

  useEffect(() => {
    if (code) {
      console.log(code);
      dispatch(userLogin('/api/social', code));
    }
    navigate('/', { replace: true });
  }, []);
  return <Loading mainColor={Palette.blue[5]} />;
}

export default OauthRedirect;
