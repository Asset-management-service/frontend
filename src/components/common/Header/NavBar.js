import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    height: 0px;
    overflow: hidden;
    transition: all 0.3s linear;
    justify-content: flex-start;
    &.show {
      height: 300px;
    }
  }
`;

function NavBar({ open, user }) {
  return (
    <StyledNavBar className={open ? 'show' : ''}>
      <NavLinks />
      <UserLinks user={user} />
    </StyledNavBar>
  );
}

export default NavBar;
