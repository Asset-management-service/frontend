import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CommentWrapper = styled.div`
  margin-bottom: 1rem;
  .CommentList-divider {
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
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
      <CommentForm type={'댓글'} />
    </CommentWrapper>
  );
}

export default CommentList;
