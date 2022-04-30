import React, { useEffect, useRef, useState } from 'react';
import CommentList from './CommentList';
import PostDropMenu from './PostDropMenu';
import ImageList from '../common/ImageList';
import { insertAutoLink } from '../../lib';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import styled from 'styled-components';

const DetailSection = styled.div`
  font-size: 16px;
  padding: 0rem 3rem 3rem;

  .PostDetail-user {
    display: flex;
    svg {
      font-size: 45px;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.6);
    }
    .PostDetail-date {
      color: rgba(0, 0, 0, 0.5);
      margin-top: 3px;
    }
  }
  .PostDetail-content {
    font-size: 20px;
    padding: 3rem 0;
    margin-bottom: 2rem;
    p {
      white-space: pre-line;
      a {
        text-decoration: underline;
      }
    }
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
  .PostDetail-list {
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

function PostDetail({ post, onEdit, onDelete, like, onLike, onScrap }) {
  const [newText, setNewText] = useState('');
  useEffect(() => {
    setNewText(post.content);
    const newText = insertAutoLink(post.content);
    setNewText(newText);
  }, [post.content]);

  return (
    <DetailSection>
      <div className="PostDetail-user">
        <AccountCircleRoundedIcon className="BoardDetail-icon" />
        <div>
          <p>{post.username}</p>
          <p className="PostDetail-date">{post.createDate}</p>
        </div>
      </div>
      <DetailHeading>
        <div>
          <h3>{post.title}</h3>
          <ul className="PostDetail-list">
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
      </DetailHeading>
      <div className="PostDetail-content">
        <ImageList images={post.imageUrl} />
        <p dangerouslySetInnerHTML={{ __html: newText }}></p>
      </div>
      <CommentList
        postId={post.postId}
        commentList={post.comments}
        commentCount={post.commentCount}
      />
    </DetailSection>
  );
}

export default React.memo(PostDetail);
