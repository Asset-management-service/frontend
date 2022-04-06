import { ModalWrapper, StyledModal } from '../common/Modal';
import SocialLogin from './SocialLogin';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function LoginModal({ show, onClose }) {
  return (
    <ModalWrapper show={show}>
      <StyledModal>
        <SocialLogin />
        <button type="button" className="Modal-close-btn" onClick={onClose}>
          <CloseRoundedIcon />
        </button>
      </StyledModal>
    </ModalWrapper>
  );
}

export default LoginModal;
