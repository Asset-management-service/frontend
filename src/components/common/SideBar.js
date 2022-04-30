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
  @media screen and (max-width: 1200px) {
    top: 6rem;
    bottom: auto;
    left: 0;
    right: 0;
    padding: 2rem 1.3rem 0;
    display: flex;
    align-items: flex-start;
    h2 {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  margin: 1rem;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    margin: 0;
    overflow-x: scroll;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    &::-webkit-scrollbar {
      height: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #949494;
      border-radius: 45px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #303030;
    }
  }
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
  @media screen and (max-width: 1200px) {
    margin-bottom: 0;
    width: auto;
    flex-shrink: 0;
    font-size: 18px;
    margin: 0 1rem;
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
