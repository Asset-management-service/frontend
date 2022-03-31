import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommentItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  font-size: 17px;
  border-bottom: 1px solid lightgray;
`;

const CommentItemRow = styled.div`
  display: flex;
  &:first-child {
    justify-content: space-between;
    margin-bottom: 10px;
    a {
      font-weight: bold;
    }
  }
  &:last-child {
    font-size: 15px;
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
  return (
    <CommentItem>
      <CommentItemRow>
        <Link to="/">{comment.comment}</Link>
        <p>{comment.date}</p>
      </CommentItemRow>
      <CommentItemRow>
        <p className="comment-category">{comment.category}</p>
        <p className="comment-title">{comment.title}</p>
        <span>[{comment.commentNum}]</span>
      </CommentItemRow>
    </CommentItem>
  );
}

export default MyCommentItem;
