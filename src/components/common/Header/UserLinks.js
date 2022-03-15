import { Link } from 'react-router-dom';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const StyledUserLinks = styled.ul`
  display: flex;
  @media screen and (max-width: 1120px) {
    position: absolute;
    top: 1rem;
    right: 6rem;
    transform: translateY(45%);
  }
  @media screen and (max-width: 600px) {
    position: relative;
    top: 0;
    right: 0;
    transform: none;
    flex-direction: column;
  }
`;

const StyledUserLink = styled.li`
  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${Palette.gray[1]};
    }
  }
  & + & {
    margin-left: 20px;
  }
  .UserLinks-icon {
    margin-right: 5px;
  }
  @media screen and (max-width: 600px) {
    & + & {
      margin-left: 0;
    }
    a {
      padding: 1.5rem 0rem 1.5rem 2rem;
      &:hover {
        color: inherit;
        background-color: #9dacca;
      }
    }
  }
`;

function UserLinks({ user, open }) {
  return (
    <StyledUserLinks className={open ? 'show' : ''}>
      <StyledUserLink>
        <Link to={user ? '/mypage' : '/register'}>
          <PersonIcon className="UserLinks-icon" />
          {user ? '마이페이지' : '회원가입'}
        </Link>
      </StyledUserLink>
      <StyledUserLink>
        <Link to={user ? '/logout' : '/login'}>
          {user ? (
            <>
              <LogoutRoundedIcon className="UserLinks-icon" />
              로그아웃
            </>
          ) : (
            <>
              <LoginRoundedIcon className="UserLinks-icon" />
              로그인
            </>
          )}
        </Link>
      </StyledUserLink>
    </StyledUserLinks>
  );
}

export default UserLinks;
