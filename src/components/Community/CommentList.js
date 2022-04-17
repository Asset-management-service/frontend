import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
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
function CommentList({ commentList, postId }) {
  //const { auth } = useSelector(({ login }) => login);
  const auth = 'asdf';
  const { comments, loading } = useSelector(({ comment }) => comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCommentList(commentList));
  }, []);
  useEffect(() => console.log(comments), [comments]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <CommentWrapper>
      <div className="CommentList-divider">댓글 총 10개</div>
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
        <CommentForm type="댓글" postId={postId} />
      ) : (
        <p className="CommentList-guide">댓글은 로그인 후에 작성 가능합니다.</p>
      )}
    </CommentWrapper>
  );
}

export default React.memo(CommentList);
