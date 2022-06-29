import EditorContainer from '../../containers/EditorContainer';
import WriteActionButtons from '../../components/common/WriteActionButtons';
import styled from 'styled-components';

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
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;
function MoneyLogForm({ onCancel, isEdit, onSubmit }) {
  return (
    <StyledForm>
      <WriteActionButtons
        onCancel={onCancel}
        isEdit={isEdit}
        onSubmit={onSubmit}
      />
      <EditorContainer />
    </StyledForm>
  );
}

export default MoneyLogForm;
