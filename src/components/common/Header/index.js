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
  background-color: #fff;
`;

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.3rem;
`;

const StyledNavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 15;
`;

function Header({ loading }) {
  if (loading) {
    return <Loading mainColor={Palette.gray[8]} text="로그인 중..." />;
  }

  return (
    <>
      <HeaderWrapper>
        <StyledHeader>
          <StyledNavCenter>
            <Logo />
          </StyledNavCenter>
          <NavLinks />
          <UserLinks />
        </StyledHeader>
      </HeaderWrapper>
      <Outlet />
    </>
  );
}
export default Header;
