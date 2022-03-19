import { Button } from '../common/Button';
import LoginError from './LoginError';
import { useToggle } from '../../hooks';
import Palette from '../../lib/Palette';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  width: 100%;
  p {
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 1rem 0 1.5rem;
  input {
    width: 100%;
    font-size: 20px;
    padding: 0.5rem;
    border: 1px solid ${Palette.gray[1]};
    border-radius: 4px;
    &[type='text'],
    &[type='password'] {
      padding-right: 40px;
    }
  }
`;

export const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 20px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 20px;
  margin: 0.6rem 0;
  padding: 0.8rem;
  background-color: ${({ loading }) => loading && Palette.gray[6]};
`;

function LoginForm({ id, password, onChange, loading, authError, onLogin }) {
  const [show, setShow] = useToggle(false);

  return (
    <>
      {authError && <LoginError />}
      <StyledLoginForm onSubmit={onLogin}>
        <FormLabel>
          <p>아이디</p>
          <InputWrapper>
            <input type="text" name="id" value={id} onChange={onChange} />
          </InputWrapper>
        </FormLabel>
        <FormLabel>
          <p>비밀번호</p>
          <InputWrapper>
            <input
              type={show ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={onChange}
            />
            <PasswordButton type="button" onClick={setShow}>
              {show ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </PasswordButton>
          </InputWrapper>
        </FormLabel>
        <StyledButton basiccolor="#282828" type="submit">
          {loading ? '로그인 중...' : '로그인'}
        </StyledButton>
      </StyledLoginForm>
    </>
  );
}

export default LoginForm;
