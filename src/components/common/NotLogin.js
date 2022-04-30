import { ModalWrapper, StyledModal } from './Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';

const NotLoginWrapper = styled.section`
  height: ${({ modal }) => modal && '150px'};
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

export function NotLogin() {
  return (
    <NotLoginWrapper>
      <CheckCircleIcon className="NotLogin-icon" />
      <p>로그인이 필요한 서비스입니다</p>
    </NotLoginWrapper>
  );
}

export function NotLoginModal({ show, onClose }) {
  return (
    <ModalWrapper show={show}>
      <StyledModal>
        <NotLoginWrapper modal="modal">
          <CheckCircleIcon className="NotLogin-icon" />
          <p>로그인이 필요한 서비스입니다</p>
          <button type="button" className="Modal-close-btn" onClick={onClose}>
            <CloseRoundedIcon />
          </button>
        </NotLoginWrapper>
      </StyledModal>
    </ModalWrapper>
  );
}
