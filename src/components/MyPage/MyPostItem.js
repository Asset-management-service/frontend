import { Link } from 'react-router-dom';
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
    &:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .post-category {
    opacity: 0.5;
  }
  .post-heading {
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }
  .post-commentNum {
    color: red;
    margin-left: 7px;
  }
  .post-views,
  .post-date {
    display: flex;
    margin-left: 3rem;
    opacity: 0.7;
    .view-icon {
      margin-right: 5px;
    }
  }
`;

function MyPostItem({ post }) {
  return (
    <PostItem>
      <div className="post-column">
        <span className="post-category">{post.category}</span>
        <div className="post-heading">
          <Link to="/">
            <h3>{post.title}</h3>
          </Link>
          <span className="post-commentNum">[{post.commentNum}]</span>
        </div>
      </div>
      <div className="post-column">
        <span className="post-date">{post.date}</span>
        <span className="post-views">
          <VisibilityOutlinedIcon className="view-icon" />
          {post.views}
        </span>
      </div>
    </PostItem>
  );
}

export default MyPostItem;
