import { useState } from 'react';
import PostDropMenu from './PostDropMenu';
import CommentForm from './CommentForm';
import { useToggle } from '../../hooks';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../modules/comment';

const StyledItem = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 1px solid gray;
  ${({ type }) =>
    type === '대댓글' &&
    css`
      margin-left: 3rem;
      border: 1px solid gray;
      border-radius: 20px;
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
  const [recomment, setRecomment] = useToggle(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  // const { auth } = useSelector(({ login }) => login);
  const auth = 'sdf';
  const onDelete = () => {
    dispatch(deleteComment(comment.commentId));
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
            <CommentForm
              comment={comment.content}
              commentId={comment.commentId}
              isEdit={edit}
              setEdit={setEdit}
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
        <CommentForm
          type="대댓글"
          parentId={comment.commentId}
          postId={postId}
        />
      )}
    </StyledItem>
  );
}

export default CommentItem;
