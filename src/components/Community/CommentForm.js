import { Button } from '../common/Button';
import { FormInput } from '../common/FormInput';
import { useForm } from '../../hooks';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 0 0;

  margin-left: ${({ type }) => (type === '대댓글' ? `3rem` : `0rem`)};
  button {
    font-size: 15px;
    margin-left: 10px;
    display: flex;
  }
  input {
    font-size: 15px;
  }
`;

const Input = styled(FormInput)`
  width: auto;
  flex-grow: 1;
`;

function CommentForm({ type }) {
  const { form, onChange } = useForm({
    comment: '',
  });
  const msg = `${type}을 작성해주세요`;
  const onSubmit = (e) => {
    e.preventDefault(); // 댓글 및 대댓글 추가 기능 (api)
  };
  return (
    <StyledForm onSubmit={onSubmit} type={type}>
      <Input
        type="text"
        name="comment"
        value={form.comment}
        onChange={onChange}
        placeholder={msg}
      />
      <Button outlined={true} basiccolor="#40B2B7">
        <CreateOutlinedIcon />
      </Button>
    </StyledForm>
  );
}

export default CommentForm;
