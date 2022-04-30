import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentItem from './CommentItem';
import CommentFormContainer from '../../containers/CommentFormContainer';
import { setCommentList } from '../../modules/comment';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-bottom: 1rem;
  .CommentList-divider {
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
  }
  .CommentList-guide {
    font-weight: bold;
    color: red;
  }
`;
function CommentList({ commentList, postId, commentCount }) {
  const { auth } = useSelector(({ login }) => login);
  const { comments, loading } = useSelector(({ comment }) => comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommentList(commentList));
  }, [commentList]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <CommentWrapper>
      <div className="CommentList-divider">댓글 총 {commentCount}개</div>
      <ul>
        {comments &&
          comments.map((comment) => (
            <CommentItem
              type="댓글"
              comment={comment}
              key={comment.commentId}
              postId={postId}
            >
              {comments &&
                comment.children.map((recomment) => (
                  <CommentItem
                    type="대댓글"
                    comment={recomment}
                    key={recomment.commentId}
                  />
                ))}
            </CommentItem>
          ))}
      </ul>
      {auth ? (
        <CommentFormContainer type="댓글" postId={postId} parentId={null} />
      ) : (
        <p className="CommentList-guide">댓글은 로그인 후에 작성 가능합니다.</p>
      )}
    </CommentWrapper>
  );
}

export default React.memo(CommentList);
