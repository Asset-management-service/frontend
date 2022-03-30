import SocialLogin from '../components/Login/SocialLogin';
import styled from 'styled-components';

const LoginWrapper = styled.main`
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem auto 0;
  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
    font-weight: normal;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  p {
    margin-bottom: 8rem;
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <h1>Moa Moa</h1>
      <p>새로운 자산관리</p>
      <SocialLogin />
    </LoginWrapper>
  );
}

export default Login;
