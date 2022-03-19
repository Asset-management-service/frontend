import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dee3ed;
  min-width: 700px;
`;

const StyledNavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding-top: ${({ scroll }) => (scroll ? '0.5rem' : '2rem')};
`;

const Spacer = styled.div`
  height: ${({ scroll }) => (scroll ? '9rem' : '11.5rem')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
`;

function Header({ loading }) {
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
      <StyledHeader>
        <UserLinks />
        <StyledNavCenter scroll={scroll}>
          <Logo scroll={scroll} />
        </StyledNavCenter>
        <NavLinks />
      </StyledHeader>
      <Spacer scroll={scroll} />
      <Outlet />
    </>
  );
}
export default Header;
