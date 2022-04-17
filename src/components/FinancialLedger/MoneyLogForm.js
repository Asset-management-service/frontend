import EditorContainer from '../../containers/EditorContainer';
import WriteActionButtons from '../../components/common/WriteActionButtons';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 4rem;
  input {
    margin: 1rem 0;
  }
  button {
    margin: 0.5rem;
  }
`;
function MoneyLogForm({ onCancel, isEdit, onSubmit, contentRef }) {
  return (
    <StyledForm>
      <WriteActionButtons
        onCancel={onCancel}
        isEdit={isEdit}
        onSubmit={onSubmit}
      />
      <EditorContainer contentRef={contentRef} />
    </StyledForm>
  );
}

export default MoneyLogForm;
