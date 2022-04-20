import React from 'react';
import { useSelector } from 'react-redux';
import CommentList from './CommentList';
import PostDropMenu from './PostDropMenu';
import ImageList from './ImageList';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import styled from 'styled-components';

const DetailSection = styled.div`
  font-size: 16px;
  padding: 0rem 3rem 3rem;

  .BoardDetail-user {
    display: flex;
    svg {
      font-size: 45px;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.6);
    }
    .BoardDetail-date {
      color: rgba(0, 0, 0, 0.5);
      margin-top: 3px;
    }
  }
  .BoardDetail-content {
    font-size: 20px;
    padding: 3rem 0;
    margin-bottom: 2rem;
    white-space: pre-line;
  }
`;

const DetailHeading = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 1rem 0 0;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 25px;
    margin-bottom: 1rem;
  }
  .BoardDetail-list {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      margin-right: 10px;
      svg {
        font-size: 20px;
        margin: 2px 1px 0 0;
      }
    }
  }
  .like-icon {
    color: red;
  }
  .scrap-icon {
    color: #40b2b7;
  }
  .view-icon {
    color: rgba(0, 0, 0, 0.6);
  }
  .like-btn {
    margin-right: 10px;
    color: red;
  }
`;

// 자신이 쓴 글이라면 수정 및 삭제 기능 추가되어야 함.

function PostDetail({ post, onEdit, onDelete, like, onLike, onScrap }) {
  const { auth } = useSelector(({ login }) => login);
  return (
    <DetailSection>
      <div className="BoardDetail-user">
        <AccountCircleRoundedIcon className="BoardDetail-icon" />
        <div>
          <p>{post.username}</p>
          <p className="BoardDetail-date">{post.createDate}</p>
        </div>
      </div>
      <DetailHeading>
        <div>
          <h3>{post.title}</h3>
          <ul className="BoardDetail-list">
            <li>
              <FavoriteBorderRoundedIcon className="like-icon" />
              {post.likeCount}
            </li>
            <li>
              <BookmarkBorderRoundedIcon className="scrap-icon" />
              {post.scrapCount}
            </li>
            <li>
              <RemoveRedEyeOutlinedIcon className="view-icon" />
              {post.viewCount}
            </li>
          </ul>
        </div>
        {auth && (
          <div>
            <button onClick={onLike} className="like-btn">
              {like ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
            </button>
            <PostDropMenu
              scrap="true"
              user={post.myPost}
              onEdit={onEdit}
              onScrap={onScrap}
              onDelete={onDelete}
            />
          </div>
        )}
      </DetailHeading>

      <p className="BoardDetail-content">
        <ImageList images={post.imageUrl} />
        {post.content}
      </p>
      <CommentList
        postId={post.postId}
        commentList={post.comments}
        commentCount={post.commentCount}
      />
    </DetailSection>
  );
}

export default React.memo(PostDetail);
