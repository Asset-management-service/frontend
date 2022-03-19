import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { ModalWrapper, StyledModal, ButtonBox } from '../common/Modal';
import Palette from '../../lib/Palette';
import { useForm } from '../../hooks';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import styled from 'styled-components';

const Modal = styled(StyledModal)`
  width: 500px;
  p {
    text-align: left;
    display: flex;
    align-items: center;
    .email-icon {
      margin-right: 10px;
    }
    &.text {
      text-align: center;
    }
    &.error-message {
      color: ${Palette.red[6]};
      font-size: 15px;
    }
  }
  input {
    width: 100%;
    font-size: 20px;
    padding: 0.5rem;
    border: 1px solid ${Palette.gray[1]};
    border-radius: 4px;
    margin: 1rem 0;
    &.error {
      border-color: ${Palette.red[6]};
    }
    &::placeholder {
      font-size: 17px;
    }
  }
`;

function LoginFind({ modal, onClose }) {
  const { form, onChange } = useForm({
    email: '',
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      setError(true);
    } else {
      // api 호출
      setSubmit(true);
    }
  };
  useEffect(() => {
    if (!modal) {
      setSubmit(false);
      onChange({ target: { name: 'email', value: '' } });
      setError(false);
    }
  }, [modal]);
  return (
    <ModalWrapper show={modal}>
      <Modal>
        <h1>비밀번호 찾기</h1>
        {submit ? (
          <p className="text">
            입력하신 이메일 주소로 비밀번호 재설정 링크를 보냈습니다.
            확인해주세요.
          </p>
        ) : (
          <label>
            <p>
              <MailOutlineRoundedIcon color="primary" className="email-icon" />
              이메일
            </p>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={onChange}
              className={error ? 'error' : ''}
              placeholder="회원가입 시 등록했던 이메일을 입력해주세요"
            />
            {error && <p className="error-message">이메일을 입력해주세요</p>}
          </label>
        )}
        <ButtonBox>
          <Button
            outlined={false}
            basiccolor={Palette.gray[3]}
            hover={Palette.gray[5]}
            onClick={submit ? onClose : onSubmit}
          >
            확인
          </Button>
          {!submit && (
            <Button
              outlined={false}
              basiccolor={Palette.gray[3]}
              hover={Palette.gray[5]}
              onClick={onClose}
            >
              취소
            </Button>
          )}
        </ButtonBox>
      </Modal>
    </ModalWrapper>
  );
}

export default LoginFind;
