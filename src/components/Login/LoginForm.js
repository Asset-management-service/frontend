import { Button } from '../common/Button';
import { FormInput } from '../common/FormInput';
import LoginError from './LoginError';
import Palette from '../../lib/Palette';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
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
  return (
    <>
      {authError && <LoginError />}
      <StyledLoginForm onSubmit={onLogin}>
        <FormInput
          label="아이디"
          type="text"
          name="id"
          value={id}
          onChange={onChange}
        />
        <FormInput
          label="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <StyledButton basiccolor="#282828" type="submit">
          {loading ? '로그인 중...' : '로그인'}
        </StyledButton>
      </StyledLoginForm>
    </>
  );
}

export default LoginForm;
