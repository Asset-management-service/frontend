import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { StyledModal, ModalWrapper, ButtonBox } from '../common/Modal';
import { FormInput } from '../common/FormInput';
import { useForm } from '../../hooks';
import Palette from '../../lib/Palette';

function Modal() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const [consent, setConsent] = useState(false);
  const { form, onChange } = useForm({
    password: '',
  });

  const handleNotConsent = (e) => {
    e.preventDefault();
    setConsent(false);
    setModal(false);
    navigate(-1);
  };
  const handleConsent = (e) => {
    e.preventDefault();
    setConsent(true);
  };

  const onWithdraw = (e) => {
    e.preventDefault();
    // 회원 탈퇴 기능 추가
    navigate('/', { replace: true });
    setModal(false);
  };
  return (
    <ModalWrapper show={modal}>
      <StyledModal>
        <h1>{consent ? '비밀번호를 입력하세요' : '계속 진행하시겠습니까?'}</h1>
        {consent ? (
          <FormInput
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
        ) : (
          <p>회원 탈퇴 시 모든 데이터가 삭제됩니다.</p>
        )}
        <ButtonBox>
          {consent ? (
            <>
              <Button
                outlined={false}
                basiccolor={Palette.gray[3]}
                hover={Palette.gray[5]}
                onClick={onWithdraw}
              >
                확인
              </Button>
              <Button
                outlined={false}
                basiccolor={Palette.gray[3]}
                hover={Palette.gray[5]}
                onClick={handleNotConsent}
              >
                취소
              </Button>
            </>
          ) : (
            <>
              <Button
                outlined={false}
                basiccolor={Palette.gray[3]}
                hover={Palette.gray[5]}
                onClick={handleConsent}
              >
                예
              </Button>
              <Button
                outlined={false}
                basiccolor={Palette.gray[3]}
                hover={Palette.gray[5]}
                onClick={handleNotConsent}
              >
                아니오
              </Button>
            </>
          )}
        </ButtonBox>
      </StyledModal>
    </ModalWrapper>
  );
}

export default Modal;
