import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { COMMUNITY_CATEGORY } from '../../constants/community';
import { deletePost, scrapPost } from '../../lib/api/post';
import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  font-size: 17px;
  border-bottom: 1px solid lightgray;
  .post-column {
    display: flex;
    align-items: center;
    &:last-child {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      gap: 0rem 1rem;
      text-align: right;
    }
  }
  .post-category {
    opacity: 0.5;
    width: 170px;
  }
  .post-heading {
    display: flex;
    align-items: center;
  }
  .post-commentNum {
    color: red;
    margin-left: 7px;
  }
  .post-views,
  .post-date {
    display: flex;
    opacity: 0.7;
    .view-icon {
      margin-right: 5px;
    }
  }
  .post-date {
    margin-right: 3rem;
  }
  .removeBtn {
    text-decoration: underline;
  }
`;

function MyPostItem({ post, category }) {
  const queryClient = useQueryClient();
  const to = `/community/${post.categoryName}/${post.postId}`;
  const deleteMutation = useMutation(() => deletePost(post.postId), {
    onSuccess: () => {
      queryClient.refetchQueries(['userPosts', 'post']);
    },
  });
  const scrapMutation = useMutation(() => scrapPost(post.postId), {
    onSuccess: () => {
      queryClient.refetchQueries(['userPosts', 'scrap']);
    },
  });
  const onClick = () => {
    if (category === 'post') {
      deleteMutation.mutate();
    } else if (category === 'scrap') {
      scrapMutation.mutate();
    }
  };

  return (
    <PostItem>
      <div className="post-column">
        <span className="post-category">
          {COMMUNITY_CATEGORY[post.categoryName]}
        </span>
        <div className="post-heading">
          <Link to={to}>
            <h3>{post.title}</h3>
          </Link>
          <span className="post-commentNum">[{post.commentNum}]</span>
        </div>
      </div>
      <div className="post-column">
        <span className="post-date">{post.localDateTime}</span>
        <span className="post-views">
          <VisibilityOutlinedIcon className="view-icon" />
          {post.viewCount}
        </span>
        <button className="removeBtn" onClick={onClick}>
          {category === 'post' ? '삭제' : '스크랩 취소'}
        </button>
      </div>
    </PostItem>
  );
}

export default MyPostItem;
