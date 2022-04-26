import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-right: 1px solid lightgray;
  position: fixed;
  background-color: #fff;
  top: 4.5rem;
  bottom: 0;
  left: 0;
  z-index: 1;
  h2 {
    font-size: 30px;
    margin: 2rem 0 4rem 2rem;
  }
`;

const NavList = styled.ul`
  margin: 1rem;
`;

const NavItem = styled.li`
  font-size: 20px;
  margin-bottom: 3rem;
  width: 230px;
  a {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    &.active {
      background-color: #eaf5f6;
      color: #40b2b7;
      font-weight: bold;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;

function SideBar({ menu, navs }) {
  return (
    <StyledNav>
      <h2>{menu}</h2>
      <NavList>
        {navs.map((nav, index) => (
          <NavItem key={index}>
            <NavLink to={nav.to}>{nav.label}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}

export default SideBar;
