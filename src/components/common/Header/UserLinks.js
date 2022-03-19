import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../modules/login';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const StyledUserLinks = styled.ul`
  position: absolute;
  right: 0;
  display: flex;
  padding: 1rem 2rem 0;
`;

const StyledUserLink = styled.li`
  a,
  button {
    display: flex;
    align-items: center;
    font-size: 15px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${Palette.gray[6]};
    }
  }
  & + & {
    margin-left: 20px;
  }
  .UserLinks-icon {
    margin-right: 5px;
  }
`;

function UserLinks() {
  const { auth } = useSelector(({ login }) => login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <StyledUserLinks>
      <StyledUserLink>
        <Link to={auth ? '/mypage' : '/register'}>
          <PersonIcon className="UserLinks-icon" />
          {auth ? '마이페이지' : '회원가입'}
        </Link>
      </StyledUserLink>
      <StyledUserLink>
        {auth ? (
          <button onClick={onLogout}>
            <LogoutRoundedIcon className="UserLinks-icon" />
            로그아웃
          </button>
        ) : (
          <Link to="/login">
            <LoginRoundedIcon className="UserLinks-icon" />
            로그인
          </Link>
        )}
      </StyledUserLink>
    </StyledUserLinks>
  );
}

export default UserLinks;
