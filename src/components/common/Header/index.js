import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  border-bottom: 1px solid lightgray;
`;

const StyledHeader = styled.header`
  display: ${({ auth }) => (auth ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  min-width: 700px;
  width: 90vw;
  margin: 0 auto;
`;

const StyledNavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

const Spacer = styled.div`
  height: 5rem;
`;

function Header({ loading, auth }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading mainColor={Palette.blue[5]} />;
  }

  return (
    <>
      <HeaderWrapper>
        <StyledHeader auth={auth}>
          <StyledNavCenter scroll={scroll}>
            <Logo scroll={scroll} />
          </StyledNavCenter>
          <NavLinks />
          <UserLinks />
        </StyledHeader>
      </HeaderWrapper>
      <Spacer scroll={scroll} />
      <Outlet />
    </>
  );
}
export default Header;
