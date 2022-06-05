import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
  position: absolute;
  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
  background-color: #fff;
  border-radius: 10px;
  z-index: 5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  transform: translateX(-50%);
  min-width: 230px;
  &:before {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-bottom: 20px solid #fff;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
  }
  @media screen and (max-width: 1200px) {
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  @media screen and (max-width: 1200px) {
  }
`;

const NavItem = styled.li`
  font-size: 18px;
  & + & {
    margin-top: 2.5rem;
  }
  a {
    padding: 0.5rem 1rem;
    &.active {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1200px) {
  }
`;

function SubMenu({
  menus,
  location,
  openSubMenu,
  closeSubMenu,
  keepOpenSubMenu,
}) {
  return (
    <>
      {openSubMenu && (
        <StyledNav
          onMouseOver={keepOpenSubMenu}
          onMouseLeave={closeSubMenu}
          top={location.top}
          left={location.left}
        >
          <NavList>
            {menus.map((menu, index) => (
              <NavItem key={index}>
                <NavLink to={menu.to}>{menu.label}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </StyledNav>
      )}
    </>
  );
}

export default SubMenu;
