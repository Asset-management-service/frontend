import { useSelector } from 'react-redux';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
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
function CommentList() {
  const { auth } = useSelector(({ login }) => login);
  return (
    <CommentWrapper>
      <div className="CommentList-divider">댓글 총 10개</div>
      <ul>
        <CommentItem type={'댓글'}>
          <CommentItem type={'대댓글'} />
        </CommentItem>
        <CommentItem type={'댓글'}>
          <CommentItem type={'대댓글'} />
        </CommentItem>
        <CommentItem type={'댓글'}>
          <CommentItem type={'대댓글'} />
        </CommentItem>
        <CommentItem type={'댓글'}>
          <CommentItem type={'대댓글'} />
        </CommentItem>
        <CommentItem type={'댓글'}>
          <CommentItem type={'대댓글'} />
        </CommentItem>
      </ul>
      {auth ? (
        <CommentForm type={'댓글'} />
      ) : (
        <p className="CommentList-guide">댓글은 로그인 후에 작성 가능합니다.</p>
      )}
    </CommentWrapper>
  );
}

export default CommentList;
