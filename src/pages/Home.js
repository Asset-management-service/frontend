import { Button } from '../components/common/Button';
import SocialLogin from '../components/Login/SocialLogin';
import styled from 'styled-components';

const LoginWrapper = styled.main`
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
    font-weight: normal;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
  p {
    font-size: 20px;
  }
  a {
    margin: 5rem 0;
    font-size: 13px;
  }
`;

function Home() {
  return (
    <LoginWrapper>
      <h1>Moa Moa</h1>
      <p>모아모아와 함께하는 새로운 자산관리✨</p>
      <Button to="/community" outlined={true} basiccolor="black">
        커뮤니티 보러가기
      </Button>
      <SocialLogin />
    </LoginWrapper>
  );
}

export default Home;
