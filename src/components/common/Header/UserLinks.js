import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Notification from './Notification';
import ChatIcon from './ChatIcon';
import { logout } from '../../../modules/login';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const StyledUserLinks = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledUserLink = styled.li`
  a,
  button {
    display: flex;
    align-items: center;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${Palette.gray[6]};
    }
    &.active {
      font-weight: bold;
    }
  }
  & + & {
    margin-left: 20px;
  }
  &:nth-child(3) {
    margin-left: 25px;
  }
  &:last-child {
    margin-left: 15px;
    margin-top: 3px;
  }
`;

function UserLinks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <StyledUserLinks>
      <StyledUserLink>
        <NavLink to="/mypage">마이페이지</NavLink>
      </StyledUserLink>
      <StyledUserLink>
        <button onClick={onLogout}>로그아웃</button>
      </StyledUserLink>
      <StyledUserLink>
        <Notification
          count={2}
          notify={[
            {
              check: true,
              title: '모아모아 시작 뱃지를 획득했어요',
              category: '뱃지',
            },
            {
              check: false,
              title: '새로운 댓글이 달렸어요',
              content: '게시판 이름 혹은 글 제목: 댓글 미리보기',
              category: '커뮤니티',
            },
            {
              check: false,
              title: '새로운 메시지가 있어요',
              content: '닉네임 : 메시지 미리보기',
              category: '채팅',
            },
          ]}
        />
      </StyledUserLink>
      <StyledUserLink>
        <ChatIcon />
      </StyledUserLink>
    </StyledUserLinks>
  );
}

export default UserLinks;
