import { NavLink } from 'react-router-dom';
import { nav } from '../../../constants/nav';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';

const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: center;
  position: relative;
  top: 23px;
  background-color: rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(50px);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 9%);
  border-radius: 2rem;
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
  @media screen and (max-width: 900px) {
    margin: 0 2rem;
  }
`;

function NavLinks() {
  return (
    <StyledNavLinks>
      {nav.map((menu) => (
        <StyledNavLink key={menu.id}>
          <NavLink to={menu.to}>{menu.label}</NavLink>
        </StyledNavLink>
      ))}
    </StyledNavLinks>
  );
}

export default NavLinks;
