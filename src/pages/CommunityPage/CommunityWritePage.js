import { useSearchParams } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { FormInput } from '../../components/common/FormInput';
import Editor from '../../components/common/Editor';
import { useForm } from '../../hooks';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 90vw;
  margin: 5rem auto;
  input {
    margin-bottom: 5rem;
  }
  .ql-container {
    font-size: 15px;
    min-height: 300px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 1rem;
    font-size: 17px;
  }
`;

function CommunityWritePage() {
  const [searchParams] = useSearchParams();
  const { form, onChange } = useForm({
    title: '',
    content: '',
  });
  const id = searchParams.get('id');

  if (id) {
    return <main>{id}</main>;
  }
  return (
    <main>
      <StyledForm>
        <FormInput
          type="text"
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="제목을 입력하세요"
        />
        <Editor onChange={onChange} />
      </StyledForm>
      <ButtonBox>
        <Button basiccolor="#40B2B7">{id ? '수정' : '완료'}</Button>
        <Button basiccolor="black">취소</Button>
      </ButtonBox>
    </main>
  );
}

export default CommunityWritePage;
