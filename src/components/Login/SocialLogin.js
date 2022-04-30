import { useDispatch } from 'react-redux';
import { loading } from '../../modules/login';
import kakaoIcon from '../../images/kakao-icon.png';
import naverIcon from '../../images/naver-icon.png';
import googleIcon from '../../images/google-icon.png';
import styled from 'styled-components';

const SocialLoginWrapper = styled.div`
  width: 100%;
  h2 {
    font-size: 23px;
    margin: 2rem 0 1rem;
    font-weight: normal;
    text-align: center;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

const SocialLoginHeading = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  h2 {
    position: relative;
    top: -20px;
    font-size: 25px;
    font-weight: normal;
    background-color: #fff;
    margin: 0;
    border-left: 20px solid #fff;
    border-right: 20px solid #fff;
  }
`;

const SocialLoginLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0;
`;

const SocialLoginLink = styled.li`
  margin: 0 1rem;
  border-radius: 50%;
  button {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

function SocialLogin() {
  const dispatch = useDispatch();
  const onLogin = (type) => {
    dispatch(loading());
    const loginUrl = `${process.env.REACT_APP_LOGIN_BASE_URL}/api/oauth2/authorization/${type}?redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT_URL}`;
    window.location.assign(loginUrl);
  };

  return (
    <SocialLoginWrapper>
      <SocialLoginHeading>
        <h2>로그인하기</h2>
      </SocialLoginHeading>
      <SocialLoginLinks>
        <SocialLoginLink>
          <button onClick={() => onLogin('kakao')}>
            <img src={kakaoIcon} alt="kakao icon" />
          </button>
        </SocialLoginLink>
        <SocialLoginLink>
          <button onClick={() => onLogin('naver')}>
            <img src={naverIcon} alt="naver icon" />
          </button>
        </SocialLoginLink>
        <SocialLoginLink>
          <button onClick={() => onLogin('google')}>
            <img src={googleIcon} alt="google icon" />
          </button>
        </SocialLoginLink>
      </SocialLoginLinks>
    </SocialLoginWrapper>
  );
}

export default SocialLogin;
