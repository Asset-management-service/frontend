import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';

const NotLoginWrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  .NotLogin-icon {
    transform: scale(3);
    margin-bottom: 40px;
  }
`;

function NotLogin() {
  return (
    <NotLoginWrapper>
      <CheckCircleIcon className="NotLogin-icon" />
      <p>로그인이 필요한 서비스입니다</p>
    </NotLoginWrapper>
  );
}

export default NotLogin;
