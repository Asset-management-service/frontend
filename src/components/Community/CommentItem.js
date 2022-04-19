import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import PostDropMenu from './PostDropMenu';
import { useToggle } from '../../hooks';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styled, { css } from 'styled-components';
import { removeComment } from '../../modules/comment';
import { deleteComment } from '../../lib/api/comment';
import CommentFormContainer from '../../containers/CommentFormContainer';

const StyledItem = styled.div`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid gray;
  ${({ type }) =>
    type === '대댓글' &&
    css`
      margin-left: 3rem;
      border: 1px solid gray;
      border-radius: 20px;
      margin-bottom: 1rem;
      padding: 1rem;
    `};
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    flex-grow: 1;
    .user-icon {
      font-size: 30px;
      margin-right: 10px;
    }
    div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
  .Comment-date {
    margin-left: 10px;
    opacity: 0.6;
  }
  .Comment-comment {
    margin: 0.8rem 0;
    white-space: pre-line;
  }
  .recomment-btn {
    opacity: 0.7;
  }
`;
function CommentItem({ type, children, comment, postId }) {
  const dispatch = useDispatch();
  const deleteMutation = useMutation(() => deleteComment(comment.commentId), {
    onSuccess: (datas) => {
      dispatch(removeComment(comment.commentId, comment.parentId));
    },
  });
  const [recomment, setRecomment] = useToggle(false);
  const [edit, setEdit] = useState(false);

  const { auth } = useSelector(({ login }) => login);
  const onDelete = () => {
    deleteMutation.mutate();
  };
  const onEdit = () => {
    setEdit(true);
  };
  return (
    <StyledItem type={type}>
      <ItemRow>
        <div>
          <div>
            <AccountCircleRoundedIcon className="user-icon" />
            <h4>{comment.username}</h4>
            <p className="Comment-date">{comment.createDate}</p>
          </div>
          {edit ? (
            <CommentFormContainer
              comment={comment.content}
              commentId={comment.commentId}
              isEdit={edit}
              finishEdit={() => setEdit(false)}
            />
          ) : (
            <p className="Comment-comment">{comment.content}</p>
          )}

          {type === '댓글' && auth && (
            <button className="recomment-btn" onClick={setRecomment}>
              {recomment ? `취소` : `대댓글 달기`}
            </button>
          )}
        </div>
        {auth && (
          <PostDropMenu user="true" onEdit={onEdit} onDelete={onDelete} />
        )}
      </ItemRow>
      {children}
      {recomment && (
        <CommentFormContainer
          type="대댓글"
          parentId={comment.commentId}
          postId={postId}
        />
      )}
    </StyledItem>
  );
}

export default CommentItem;
