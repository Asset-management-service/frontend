import { Button } from '../components/common/Button';
import SocialLogin from '../components/Login/SocialLogin';
import logoImg from '../images/moamoa-logo-1.png';
import styled from 'styled-components';

const LoginWrapper = styled.main`
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 90vh;
  justify-content: center;
  padding: 0;
  p {
    font-size: 20px;
  }
  a {
    margin: 3rem 0;
    font-size: 13px;
  }
  .Home-logo {
    object-fit: cover;
    height: 400px;
    margin-bottom: 1rem;
  }
`;

function Home() {
  return (
    <LoginWrapper>
      <img src={logoImg} alt="moamoa logo" className="Home-logo" />
      <p>모아모아와 함께하는 새로운 자산관리✨</p>
      <Button to="/community" outlined={true} basiccolor="black">
        커뮤니티 보러가기
      </Button>
      <SocialLogin />
    </LoginWrapper>
  );
}

export default Home;
