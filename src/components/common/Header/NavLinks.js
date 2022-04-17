import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
`;

const StyledNavLink = styled.li`
  margin: 0 1rem;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  a.active {
    font-weight: bold;
  }
`;

function NavLinks() {
  return (
    <StyledNavLinks>
      <StyledNavLink>
        <NavLink to="/financial">가계부</NavLink>
      </StyledNavLink>
      <StyledNavLink>
        <NavLink to="/community">커뮤니티</NavLink>
      </StyledNavLink>
    </StyledNavLinks>
  );
}

export default NavLinks;
