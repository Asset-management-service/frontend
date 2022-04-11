import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import EditorContainer from '../../containers/EditorContainer';
import styled from 'styled-components';
import WriteActionButtons from '../../components/common/WriteActionButtons';
import WriteActionButtonsContainer from '../../containers/WriteActionButtonsContainer';

const StyledForm = styled.form`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
  height: 100vh;
  input {
    margin: 1rem 0;
  }
`;

function CommunityWritePage() {
  //const { auth } = useSelector(({ login }) => login);
  const [initial, setInitial] = useState({
    title: '',
    content: '',
    images: [],
  });
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  /*
  if (!auth) {
    return <NotLogin />;
  }
*/
  if (id) {
    return <main>{id}</main>;
  }
  return (
    <main style={{ padding: 0 }}>
      <StyledForm>
        <WriteActionButtonsContainer
          isEdit={id ? 'true' : undefined}
          cancelTo="/community"
          cancelBtn={'exist'}
          category={category}
        />
        <EditorContainer initialState={initial} />
      </StyledForm>
    </main>
  );
}

export default CommunityWritePage;
