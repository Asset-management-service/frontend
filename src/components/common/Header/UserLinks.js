import { Link } from 'react-router-dom';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const StyledUserLinks = styled.ul`
  display: flex;
  @media screen and (max-width: 1300px) {
    position: absolute;
    top: 1rem;
    right: 6rem;
    transform: translateY(45%);
  }
`;

const StyledUserLink = styled.li`
  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${({ hover }) => hover};
    }
  }
  & + & {
    margin-left: 20px;
  }
  .UserLinks-icon {
    margin-right: 5px;
  }
`;

function UserLinks({ user }) {
  return (
    <StyledUserLinks>
      <StyledUserLink hover={Palette.gray[5]}>
        <Link to={user ? '/mypage' : '/register'}>
          <PersonIcon className="UserLinks-icon" />
          {user ? '마이페이지' : '회원가입'}
        </Link>
      </StyledUserLink>
      <StyledUserLink hover={Palette.gray[5]}>
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
