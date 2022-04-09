import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../hooks';
import { userLogin, loginFailure, initialize } from '../modules/login';
import LoginForm from '../components/Login/LoginForm';

function LoginFormContainer() {
  const { form, onChange } = useForm({
    id: '',
    password: '',
  });
  const { id, password } = form;
  const { loading, auth, authError } = useSelector(({ login }) => login);
  const dispatch = useDispatch();
  const onLogin = (e) => {
    e.preventDefault();
    if (id === '' || password === '') {
      dispatch(loginFailure('error'));
    } else {
      dispatch(userLogin('/api/login', form));
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      console.log(auth);
      navigate('/', { replace: true });
    }
  }, [auth]);

  useEffect(() => {
    return () => dispatch(initialize());
  }, []);

  return (
    <LoginForm
      id={id}
      password={password}
      onChange={onChange}
      loading={loading}
      auth={auth}
      authError={authError}
      onLogin={onLogin}
    />
  );
}

export default LoginFormContainer;
