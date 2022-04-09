import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DropMenu } from '../common/DropMenu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styled, { css } from 'styled-components';
import { useToggle } from '../../hooks';
import CommentForm from './CommentForm';

// 자신이 쓴 댓글이라면 수정 및 삭제 기능 추가되어야 함.
const commentDropMenus = [
  {
    id: 1,
    menu: <Link to="/chat">채팅보내기</Link>,
  },
  {
    id: 2,
    menu: <button>신고하기</button>,
  },
];

const StyledItem = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-bottom: 1px solid gray;
  ${({ type }) =>
    type === '대댓글' &&
    css`
      margin-left: 3rem;
      border: 1px solid gray;
      border-radius: 20px;
    `};
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    .user-icon {
      font-size: 30px;
      margin-right: 10px;
    }
    div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
  .Comment-date {
    margin-left: 10px;
    opacity: 0.6;
  }
  .Comment-comment {
    margin: 0.8rem 0;
  }
  .recomment-btn {
    opacity: 0.7;
  }
`;
function CommentItem({ type, children }) {
  const [recomment, setRecomment] = useToggle(false);
  const { auth } = useSelector(({ login }) => login);
  return (
    <StyledItem type={type}>
      <ItemRow>
        <div>
          <div>
            <AccountCircleRoundedIcon className="user-icon" />
            <h4>아모아모</h4>
            <p className="Comment-date">2022-03-23 15:00</p>
          </div>
          <p className="Comment-comment">00000000000000000000</p>
          {type === '댓글' && auth && (
            <button className="recomment-btn" onClick={setRecomment}>
              {recomment ? `취소` : `대댓글 달기`}
            </button>
          )}
        </div>
        {auth && <DropMenu menus={commentDropMenus} height={67} />}
      </ItemRow>
      {children}
      {recomment && <CommentForm type="대댓글" />}
    </StyledItem>
  );
}

export default CommentItem;
