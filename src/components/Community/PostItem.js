import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NotLoginModal } from '../common/NotLogin';
import styled, { css } from 'styled-components';

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
  h3 {
    font-size: 20px;
    margin-bottom: 0.5rem;
    span {
      font-weight: normal;
      color: red;
      display: inline-block;
      position: relative;
      top: -3px;
      margin-left: 0.5rem;
      font-size: 17px;
    }
  }
  .PostItem-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    opacity: 0.6;
    word-break: break-all;
  }
`;

const itemStyle = css`
  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  align-items: flex-start;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const StyledLink = styled(Link)`
  ${itemStyle}
`;

const StyledDiv = styled.div`
  ${itemStyle}
`;

function PostItem({ post }) {
  const to = `${post.postId}`;
  const { auth } = useSelector(({ login }) => login);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <StyledItem>
      {auth ? (
        <StyledLink to={to}>
          <div>
            <h3 className="PostItem-title">
              {post.title}
              <span>[{post.commentCount}]</span>
            </h3>
            <p className="PostItem-content">{post.content}</p>
          </div>
          <div>{post.username}</div>
          <div>{post.localDateTime}</div>
          <div>{post.viewCount} views</div>
        </StyledLink>
      ) : (
        <>
          <StyledDiv onClick={showModal}>
            <div>
              <div className="PostItem-title">
                <h3>{post.title}</h3>
                <span>[{post.commentCount}]</span>
              </div>
              <p className="PostItem-content">{post.content}</p>
            </div>
            <div>{post.username}</div>
            <div>{post.localDateTime}</div>
            <div>{post.viewCount} views</div>
          </StyledDiv>
          <NotLoginModal show={show} onClose={closeModal} />
        </>
      )}
    </StyledItem>
  );
}

export default PostItem;
