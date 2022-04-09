import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledItem = styled.li`
  font-size: 17px;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  div {
    text-align: center;
    &:first-child {
      text-align: left;
    }
  }
  .BoardItem-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    h3 {
      margin-right: 0.5rem;
      font-size: 20px;
    }
    span {
      color: red;
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  align-items: flex-start;
  &:hover {
    background-color: #f4f4f4;
  }
`;

function BoardItem({ board, id }) {
  const to = `${id}`;
  return (
    <StyledItem>
      <StyledLink to={to}>
        <div>
          <div className="BoardItem-title">
            <h3>{board.title}</h3>
            <span>[{board.commentNum}]</span>
          </div>
          <p>{board.content}</p>
        </div>
        <div>{board.author}</div>
        <div>{board.date}</div>
        <div>{board.view} views</div>
      </StyledLink>
    </StyledItem>
  );
}

export default BoardItem;
