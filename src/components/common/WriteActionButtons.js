import { Button } from './Button';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  button {
    margin: 2rem 0.5rem 0.5rem;
    font-size: 15px;
    font-weight: bold;
    border-width: 2px;
  }
`;

const WriteActionButtons = ({ isEdit, onCancel, onSubmit }) => {
  return (
    <ButtonBox>
      <Button outlined basiccolor="#40B2B7" onClick={onSubmit} type="button">
        {isEdit ? '수정' : '완료'}
      </Button>
      <Button outlined basiccolor="black" onClick={onCancel} type="button">
        취소
      </Button>
    </ButtonBox>
  );
};

export default WriteActionButtons;
