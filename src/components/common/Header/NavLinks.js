import { NavLink } from 'react-router-dom';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';

const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
`;

const StyledNavLink = styled.li`
  margin: 0 3rem;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${Palette.gray[6]};
    }
    &.active {
      font-weight: bold;
    }
  }
`;

function NavLinks() {
  return (
    <StyledNavLinks>
      <StyledNavLink>
        <NavLink to="/">가계부</NavLink>
      </StyledNavLink>
      <StyledNavLink>
        <NavLink to="/community">커뮤니티</NavLink>
      </StyledNavLink>
    </StyledNavLinks>
  );
}

export default NavLinks;
