import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { ModalWrapper, StyledModal, ButtonBox } from '../common/Modal';
import Palette from '../../lib/Palette';
import { useForm } from '../../hooks';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import styled from 'styled-components';
import FormInput from '../common/FormInput';

const Modal = styled(StyledModal)`
  width: 500px;
  p {
    text-align: left;
    display: flex;
    align-items: center;
    &.text {
      text-align: center;
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
          <FormInput
            label="이메일"
            labelIcon={<MailOutlineRoundedIcon color="primary" />}
            type="email"
            value={form.email}
            name="email"
            onChange={onChange}
            placeholder="회원가입 시 등록했던 이메일을 입력해주세요"
            error={error}
            errorMessage="이메일을 입력해주세요"
          />
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
