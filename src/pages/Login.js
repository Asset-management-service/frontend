import { Link } from 'react-router-dom';
import LoginFormContainer from '../containers/LoginFormContainer';
import SocialLogin from '../components/Login/SocialLogin';
import Palette from '../lib/Palette';
import styled from 'styled-components';

const LoginWrapper = styled.main`
  width: 90vw;
  max-width: 500px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  h1 {
    font-size: 28px;
    margin-bottom: 2rem;
  }
`;

const HelperLink = styled(Link)`
  font-size: 15px;
  margin: 0 1rem;
  transition: all 0.2s ease-in-out;
  color: ${Palette.gray[5]};
  &:hover {
    color: ${Palette.red[6]};
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <LoginFormContainer />
      <div>
        <HelperLink to="/register">회원가입하기</HelperLink>
        <HelperLink to="/resetpwd">비밀번호 찾기</HelperLink>
      </div>
      <SocialLogin />
    </LoginWrapper>
  );
}

export default Login;
