import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import DoubleCheckModal from '../common/DoubleCheckModal';
import { COMMUNITY_CATEGORY } from '../../constants/community';
import { deleteComment } from '../../lib/api/comment';
import styled from 'styled-components';

const CommentItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  font-size: 17px;
  border-bottom: 1px solid lightgray;
`;

const CommentItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    flex-grow: 1;
    div {
      font-size: 15px;
      display: flex;
      margin-top: 10px;
    }
    a {
      font-weight: bold;
    }
  }
  &:last-child {
    align-items: flex-end;
  }
  .removeBtn {
    margin-top: 5px;
    color: gray;
    text-decoration: underline;
  }
  .comment-category {
    opacity: 0.5;
    margin-right: 15px;
  }
  .comment-title {
    opacity: 0.7;
    margin-right: 7px;
  }
  span {
    color: red;
  }
`;

function MyCommentItem({ comment }) {
  const queryClient = useQueryClient();
  const commentMutation = useMutation(() => deleteComment(comment.commentId), {
    onMutate: () => {
      setDisabled(true);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['userPosts', 'comment']);
    },
    onSettled: () => {
      setShow(false);
    },
  });
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const onClick = () => {
    setShow(true);
  };
  const onCancel = () => {
    setShow(false);
  };
  const onSubmit = () => {
    commentMutation.mutate();
  };
  const to = `/community/${comment.categoryName}/${comment.postId}`;

  return (
    <>
      <CommentItem>
        <CommentItemColumn>
          <Link to={to}>{comment.content}</Link>
          <div>
            <p className="comment-category">
              {COMMUNITY_CATEGORY[comment.categoryName]}
            </p>
            <p className="comment-title">{comment.title}</p>
            <span>[{comment.commentNum}]</span>
          </div>
        </CommentItemColumn>
        <CommentItemColumn>
          <p>{comment.localDateTime}</p>
          <button type="button" onClick={onClick} className="removeBtn">
            삭제
          </button>
        </CommentItemColumn>
      </CommentItem>
      <DoubleCheckModal
        show={show}
        text={disabled ? '댓글 삭제하는 중...' : '댓글을 삭제하시겠습니까?'}
        onCancel={onCancel}
        onSubmit={onSubmit}
        disabled={disabled}
      />
    </>
  );
}

export default MyCommentItem;
