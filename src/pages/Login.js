import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../containers/LoginFormContainer';
import SocialLogin from '../components/Login/SocialLogin';
import LoginFind from '../components/Login/LoginFind';
import Palette from '../lib/Palette';
import styled, { css } from 'styled-components';

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

const baseStyle = css`
  font-size: 15px;
  margin: 0 1rem;
  transition: all 0.2s ease-in-out;
  color: ${Palette.gray[5]};
  &:hover {
    color: ${Palette.red[6]};
  }
`;

const HelperLink = styled(Link)`
  ${baseStyle}
`;

const HelperButton = styled.button`
  ${baseStyle}
`;

function Login() {
  const [modal, setModal] = useState(false);
  const onClose = (e) => {
    e.preventDefault();
    setModal(false);
  };
  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <LoginFormContainer />
      <div>
        <HelperLink to="/register">회원가입하기</HelperLink>
        <HelperButton onClick={() => setModal(true)}>
          비밀번호 찾기
        </HelperButton>
      </div>
      <SocialLogin />
      <LoginFind modal={modal} onClose={onClose} />
    </LoginWrapper>
  );
}

export default Login;
