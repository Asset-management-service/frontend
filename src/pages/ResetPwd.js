import { useState } from 'react';
import { Button } from '../components/common/Button';
import FormInput from '../components/common/FormInput';
import { useForm } from '../hooks';
import Palette from '../lib/Palette';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';

const ResetPwdWrapper = styled.main`
  width: 90vw;
  max-width: 500px;
  margin: 20rem auto 0;
  h1 {
    font-size: 25px;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const ResetPwdForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 0;
  }
  label {
    width: 100%;
    margin-bottom: 2rem;
    p {
      font-size: 17px;
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      .lock-icon {
        margin-right: 10px;
      }
      &.error-msg {
        color: ${Palette.red[7]};
        margin-top: 5px;
      }
    }
  }
  button[type='submit'] {
    margin-top: 1rem;
  }
`;

function ResetPwd() {
  const { form, onChange } = useForm({
    password: '',
    check: '',
  });
  const [error, setError] = useState({
    emptyPwd: false,
    emptyCheck: false,
    same: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.password) {
      setError({
        emptyPwd: true,
        emptyCheck: false,
        same: false,
      });
      return;
    }
    if (!form.check) {
      setError({
        emptyPwd: false,
        emptyCheck: true,
        same: false,
      });
      return;
    }
    if (form.password !== form.check) {
      setError({
        emptyPwd: false,
        emptyCheck: false,
        same: true,
      });
      return;
    }
    // api 추가
  };
  return (
    <ResetPwdWrapper>
      <h1>비밀번호 재설정</h1>
      <ResetPwdForm onSubmit={onSubmit}>
        <FormInput
          label="변경할 비밀번호"
          labelIcon={<LockOutlinedIcon color="success" />}
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          error={error.emptyPwd}
          errorMessage="비밀번호를 입력해주세요"
        />
        <FormInput
          label="비밀번호 확인"
          labelIcon={<LockOutlinedIcon color="primary" />}
          type="password"
          name="check"
          value={form.check}
          onChange={onChange}
          error={error.emptyCheck || error.same}
          errorMessage={
            error.emptyCheck
              ? '비밀번호를 입력해주세요'
              : '비밀번호가 일치하지 않습니다'
          }
        />
        <Button outlined={false} basiccolor="black" type="submit">
          변경하기
        </Button>
      </ResetPwdForm>
    </ResetPwdWrapper>
  );
}

export default ResetPwd;
