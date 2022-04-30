import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 0.3rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
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
    return <Loading mainColor={'black'} />;
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
