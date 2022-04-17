import { useSelector } from 'react-redux';
import CommentList from './CommentList';
import PostDropMenu from './PostDropMenu';
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

function PostDetail({ onLike, like, user, data, onEdit }) {
  //const { auth } = useSelector(({ login }) => login);
  const auth = 'sdf';
  return (
    <DetailSection>
      <div className="BoardDetail-user">
        <AccountCircleRoundedIcon className="BoardDetail-icon" />
        <div>
          <p>김김김김김</p>
          <p className="BoardDetail-date">2022-03-23 12:20</p>
        </div>
      </div>
      <DetailHeading>
        <div>
          <h3>제목제목제목</h3>
          <ul className="BoardDetail-list">
            <li>
              <FavoriteBorderRoundedIcon className="like-icon" /> 10
            </li>
            <li>
              <BookmarkBorderRoundedIcon className="scrap-icon" /> 10
            </li>
            <li>
              <RemoveRedEyeOutlinedIcon className="view-icon" />
              10
            </li>
          </ul>
        </div>
        {auth && (
          <div>
            <button onClick={onLike} className="like-btn">
              {like ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
            </button>
            <PostDropMenu scrap="true" user={user} onEdit={onEdit} />
          </div>
        )}
      </DetailHeading>

      <p className="BoardDetail-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci
        turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam
        et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus
        rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus
        maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante
        viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque
        tellus. Integer convallis sagittis vulputate. Integer augue dui,
        dignissim ac ullamcorper mollis, tristique et ante. Integer commodo
        massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque
        nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem.
        Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci
        iaculis quam, ac ullamcorper metus metus vitae mauris. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta
        lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis
        euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque
        at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit.
        Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut
        velit tincidunt, porta velit et, pellentesque tellus. Integer convallis
        sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis,
        tristique et ante. Integer commodo massa non ipsum cursus, id blandit
        sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate
        vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra,
      </p>
      <CommentList
        postId={1}
        commentList={[
          {
            parentId: null,
            commentId: 1,
            content: '무야호~',
            username: 'dasdad',
            createDate: '2022-04-04 21:37:52',
            updateDate: '2022-04-06 01:31:45',
            children: [
              {
                parentId: 1,
                commentId: 4,
                content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
                username: 'dasdad',
                createDate: '2022-04-04 21:38:19',
                updateDate: null,
              },
              {
                parentId: 1,
                commentId: 9,
                content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
                username: 'dasdad',
                createDate: '2022-04-07 00:38:18',
                updateDate: null,
              },
            ],
          },
          {
            parentId: null,
            commentId: 2,
            content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
            username: 'dasdad',
            createDate: '2022-04-04 21:38:04',
            updateDate: null,
            children: [
              {
                parentId: 2,
                commentId: 5,
                content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
                username: 'dasdad',
                createDate: '2022-04-04 21:38:21',
                updateDate: null,
              },
            ],
          },
          {
            parentId: null,
            commentId: 3,
            content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
            username: 'dasdad',
            createDate: '2022-04-04 21:38:09',
            updateDate: null,
            children: [
              {
                parentId: 3,
                commentId: 7,
                content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
                username: 'dasdad',
                createDate: '2022-04-06 23:35:28',
                updateDate: null,
              },
              {
                parentId: 3,
                commentId: 8,
                content: 'zxxzcxcxzcdsadadasddasdzsadadsdsdasdz',
                username: 'dasdad',
                createDate: '2022-04-07 00:34:16',
                updateDate: null,
              },
            ],
          },
        ]}
      />
    </DetailSection>
  );
}

export default PostDetail;
