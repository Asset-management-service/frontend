import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { FormInput } from '../../components/common/FormInput';
import { NotLogin } from '../../components/common/NotLogin';
import { Editor } from '../../components/common/Editor';
import { useForm } from '../../hooks';
import styled from 'styled-components';

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

function CommunityWritePage() {
  const { auth } = useSelector(({ login }) => login);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const { form, onChange } = useForm({
    title: '',
    content: '',
  });

  const [images, setImages] = useState([]);
  const nextId = useRef(0);
  const uploadImage = (e) => {
    const file = e.target.files;
    console.log(file);
    if (file && file.length > 0) {
      setImages(
        images.concat({
          image: file[0],
          name: file[0].name,
          key: nextId.current,
        }),
      );
      nextId.current++;
    }
    e.target.value = '';
  };
  const removeImage = (key) => {
    setImages(images.filter((image) => image.key !== key));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // api 로직
  };
  if (!auth) {
    return <NotLogin />;
  }

  if (id) {
    return <main>{id}</main>;
  }
  return (
    <main style={{ padding: 0 }}>
      <StyledForm onSubmit={onSubmit}>
        <ButtonBox>
          <Button outlined basiccolor="#40B2B7">
            {id ? '수정' : '완료'}
          </Button>
          <Button outlined basiccolor="black" onClick={() => navigate(-1)}>
            취소
          </Button>
        </ButtonBox>
        <FormInput
          type="text"
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="제목을 입력하세요"
        />
        <Editor
          content={form.content}
          onChange={onChange}
          uploadImage={uploadImage}
          images={images}
          removeImage={removeImage}
        />
      </StyledForm>
    </main>
  );
}

export default CommunityWritePage;
