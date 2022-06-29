import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import SubMenu from '../SubMenu';
import styled from 'styled-components';
import {
  MONEYBOOK_PAGE_NAV,
  COMMUNITY_PAGE_NAV,
  MY_PAGE_NAV,
} from '../../../constants/nav';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  width: 95vw;
  max-width: 1300px;
  height: 100%;
`;
function Header({ loading }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [location, setLocation] = useState({
    top: 0,
    left: 0,
  });
  const [menus, setMenus] = useState([]);
  const timeout = useRef(null);
  const displaySubMenu = (e) => {
    const page = e.currentTarget.textContent;
    const location = e.currentTarget.getBoundingClientRect();
    setLocation({
      top: location.bottom + 5,
      left: Math.floor((location.left + location.right) / 2),
    });
    if (page === '가계부') {
      setMenus(MONEYBOOK_PAGE_NAV);
    } else if (page === '커뮤니티') {
      setMenus(COMMUNITY_PAGE_NAV);
    } else {
      setMenus(MY_PAGE_NAV);
    }

    setOpenSubMenu(true);
  };
  const closeSubMenu = () => {
    setOpenSubMenu(false);
  };
  const handleMouseLeave = () => {
    timeout.current = setTimeout(() => setOpenSubMenu(false), 2000);
  };
  const keepOpenSubMenu = () => {
    clearTimeout(timeout.current);
  };

  if (loading) {
    return <Loading mainColor={'black'} />;
  }

  return (
    <>
      <HeaderWrapper>
        <StyledHeader>
          <Logo />
          <NavLinks
            displaySubMenu={displaySubMenu}
            handleMouseLeave={handleMouseLeave}
          />
          <UserLinks
            displaySubMenu={displaySubMenu}
            handleMouseLeave={handleMouseLeave}
          />
        </StyledHeader>
      </HeaderWrapper>
      <SubMenu
        menus={menus}
        closeSubMenu={closeSubMenu}
        openSubMenu={openSubMenu}
        keepOpenSubMenu={keepOpenSubMenu}
        location={location}
      />
      <Outlet />
    </>
  );
}
export default Header;
