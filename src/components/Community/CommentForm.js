import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../common/Button';
import { TextArea } from '../common/TextArea';
import { useForm } from '../../hooks';
import { addComment, setLoading, editComment } from '../../modules/comment';
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

function CommentForm({
  type,
  comment,
  commentId,
  parentId,
  postId,
  isEdit,
  setEdit,
}) {
  const { form, onChange } = useForm({
    comment: comment,
  });
  const dispatch = useDispatch();
  const msg = `${type}을 작성해주세요`;
  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      // 수정 api
      console.log(commentId, form.comment);
      dispatch(editComment(commentId, form.comment));
      setEdit(false);
    } else {
      // 추가 api
      console.log(parentId);
      console.log(postId);
      dispatch(setLoading(true));
      dispatch(
        addComment({
          parentId: parentId ? parentId : null,
          commentId: new Date().getTime(),
          content: form.comment,
          username: 'dasdad',
          createDate: '2022-04-07 00:34:16',
        }),
      );
      dispatch(setLoading(false));
    }
    onChange({ target: { name: 'comment', value: '' } });
  };
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
        <Button outlined basiccolor="#40B2B7" type="submit">
          <CreateOutlinedIcon />
        </Button>
      </StyledForm>
    </>
  );
}

export default CommentForm;
