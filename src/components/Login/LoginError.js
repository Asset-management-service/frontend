import Palette from '../../lib/Palette';
import styled from 'styled-components';

const LoginErrorBox = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin: 0 0 2rem;
  line-height: 1.5rem;
  border-radius: 4px;
  background-color: ${Palette.gray[0]};
  padding: 1rem;
  p {
    color: ${Palette.red[8]};
  }
`;
function LoginError() {
  return (
    <LoginErrorBox>
      <p>
        이메일 혹은 비밀번호가 일치하지 않습니다. <br />
        입력한 내용을 다시 확인해주세요.
      </p>
    </LoginErrorBox>
  );
}

export default LoginError;
