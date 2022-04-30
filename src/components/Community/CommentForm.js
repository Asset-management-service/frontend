import { Button } from '../common/Button';
import { TextArea } from '../common/TextArea';
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

function CommentForm({ type, comment, onChange, onSubmit }) {
  const msg = `${type}을 작성해주세요`;
  return (
    <>
      <StyledForm onSubmit={onSubmit} type={type}>
        <TextArea
          name="comment"
          value={comment}
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
