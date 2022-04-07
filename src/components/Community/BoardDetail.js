import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DropMenu } from '../common/DropMenu';
import CommentList from './CommentList';
import { useToggle } from '../../hooks';
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

const onScrap = () => {};

// 자신이 쓴 글이라면 수정 및 삭제 기능 추가되어야 함.
const boardDropMenus = [
  {
    id: 1,
    menu: <Link to="chat">채팅 보내기</Link>,
  },
  {
    id: 2,
    menu: <button onClick={onScrap}>스크랩하기</button>, // 스크랩 기능 추가 api)
  },
  {
    id: 3,
    menu: <button>신고하기</button>,
  },
];

function BoardDetail() {
  const { auth } = useSelector(({ login }) => login);
  const [like, setLike] = useToggle(false);
  const timer = useRef(null);
  const onLike = () => {
    setLike();
  };
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => console.log(like), 2000); // 좋어요 추가 기능 api 작성
  }, [like]);
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
            <DropMenu menus={boardDropMenus} height={99} />
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
      <CommentList />
    </DetailSection>
  );
}

export default BoardDetail;
