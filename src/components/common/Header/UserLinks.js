import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './Notification';
import ChatIcon from './ChatIcon';
import LoginModal from '../../Login/LoginModal';
import { logout } from '../../../modules/login';
import { logoutAuth } from '../../../lib/api/auth';
import styled from 'styled-components';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const StyledUserLinks = styled.ul`
  display: flex;
  align-items: center;
  z-index: 5;
`;

const StyledUserLink = styled.li`
  a,
  button {
    display: flex;
    align-items: center;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
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
  //&:last-child {
  //  margin-left: 15px;
  // margin-top: 3px;
  //}
  .UserLinks-icon {
    margin-right: 5px;
  }
  .login-btn {
    font-weight: bold;
    color: #40b2b7;
  }
`;

function UserLinks({ displaySubMenu, handleMouseLeave }) {
  const [show, setShow] = useState(false);
  const { auth } = useSelector(({ login }) => login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    logoutAuth().then((data) => {
      if (data) {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('EXPIRED_AT');
        dispatch(logout());
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <StyledUserLinks>
      {auth && (
        <>
          <StyledUserLink
            onMouseOver={displaySubMenu}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/mypage">마이페이지</NavLink>
          </StyledUserLink>
        </>
      )}

      <StyledUserLink>
        {auth ? (
          <button onClick={onLogout}>로그아웃</button>
        ) : (
          <button onClick={() => setShow(true)} className="login-btn">
            <LoginRoundedIcon className="UserLinks-icon" />
            로그인하기
          </button>
        )}
      </StyledUserLink>
      {/*
      {auth && (
        <>
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
        </>
      )}
            */}
      {show && <LoginModal onClose={() => setShow(false)} />}
    </StyledUserLinks>
  );
}

export default UserLinks;
