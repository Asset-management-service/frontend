import { useToggle } from '../../hooks';
import Palette from '../../lib/Palette';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';

const FormLabel = styled.label`
  width: 100%;
  p {
    font-size: 20px;
  }
  svg {
    margin-right: 5px;
  }
  .error-msg {
    color: ${Palette.red[6]};
    font-size: 15px;
    margin-top: 10px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  input {
    width: 100%;
    font-size: 20px;
    padding: 0.5rem;
    border: 1px solid ${Palette.gray[1]};
    border-radius: 4px;
    border-color: ${({ error }) => error && Palette.red[6]};
    padding-right: ${({ pwdBtn }) => (pwdBtn ? '40px' : 0)};
    &::placeholder {
      font-size: 17px;
    }
  }
`;

const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 20px;
  display: flex;
  align-items: center;
`;

export function FormInput({
  label,
  labelIcon,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  errorMessage,
}) {
  const [show, setShow] = useToggle(false);
  return (
    <FormLabel>
      <p>
        {labelIcon}
        {label}
      </p>
      <InputWrapper pwdBtn={type === 'password' ? true : false} error={error}>
        <input
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <PasswordButton type="button" onClick={setShow}>
            {show ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
          </PasswordButton>
        )}
      </InputWrapper>
      {error && <p className="error-msg">{errorMessage}</p>}
    </FormLabel>
  );
}
