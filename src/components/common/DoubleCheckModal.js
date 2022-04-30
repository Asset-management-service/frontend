import { ModalWrapper, StyledModal, ButtonBox } from './Modal';
import { Button } from './Button';
import styled from 'styled-components';

const Modal = styled(StyledModal)`
  p {
    font-size: 23px;
    color: red;
  }
  button {
    font-size: 13px;
    padding: 0.3rem;
    width: 70px;
  }
`;
function DoubleCheckModal({ text, show, onCancel, onSubmit, disabled }) {
  return (
    <ModalWrapper show={show}>
      <Modal>
        <p>{text}</p>
        <ButtonBox>
          <Button
            basiccolor="black"
            outlined
            onClick={onSubmit}
            disabled={disabled}
          >
            확인
          </Button>
          <Button
            basiccolor="black"
            outlined
            onClick={onCancel}
            disabled={disabled}
          >
            취소
          </Button>
        </ButtonBox>
      </Modal>
    </ModalWrapper>
  );
}

export default DoubleCheckModal;
