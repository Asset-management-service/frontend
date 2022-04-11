import { Button } from './Button';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-self: flex-end;
  button {
    margin: 0.5rem;
    font-size: 15px;
    font-weight: bold;
    border-width: 2px;
  }
`;

const WriteActionButtons = ({ isEdit, cancelBtn, onCancel, onSubmit }) => {
  return (
    <ButtonBox>
      <Button outlined basiccolor="#40B2B7">
        {isEdit ? '수정' : '완료'}
      </Button>
      {cancelBtn && (
        <Button outlined basiccolor="black" onClick={onCancel}>
          취소
        </Button>
      )}
    </ButtonBox>
  );
};

export default WriteActionButtons;
