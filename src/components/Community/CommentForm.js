import { useEffect, useRef, useCallback } from 'react';
import { Button } from '../common/Button';
import { TextArea } from '../common/TextArea';
import { useForm } from '../../hooks';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 0;
  margin-left: ${({ type }) => (type === '대댓글' ? `3rem` : `0rem`)};
  button {
    font-size: 15px;
    margin-left: 10px;
    display: flex;
  }
  textarea {
    flex-grow: 1;
  }
`;

const ShowText = styled.div`
  white-space: pre-line;
`;

function CommentForm({ type }) {
  const { form, onChange } = useForm({
    comment: '',
  });
  const msg = `${type}을 작성해주세요`;
  const onSubmit = (e) => {
    e.preventDefault(); // 댓글 및 대댓글 추가 기능 (api)
  };
  useEffect(() => {
    console.log(form.comment);
  }, [form.comment]);
  return (
    <>
      <StyledForm onSubmit={onSubmit} type={type}>
        <TextArea
          name="comment"
          value={form.comment}
          onChange={onChange}
          placeholder={msg}
          noscroll
        />
        <Button outlined basiccolor="#40B2B7">
          <CreateOutlinedIcon />
        </Button>
      </StyledForm>
      <ShowText>{form.comment}</ShowText>
    </>
  );
}

export default CommentForm;
