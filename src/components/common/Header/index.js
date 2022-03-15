import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import NavBtn from './NavBtn';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import { useToggle } from '../../../hooks';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #3f4a75;
  color: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

const StyledNavWrapper = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  height: 5.4rem;
  @media screen and (max-width: 1120px) {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    &.show {
      height: 322px;
    }
  }
  @media screen and (max-width: 600px) {
    &.show {
      height: 440px;
    }
  }
`;

const StyledNavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

const Spacer = styled.div`
  height: 5.4rem;
`;

function Header() {
  const [open, setOpen] = useToggle(false);
  return (
    <>
      <StyledHeader>
        <StyledNavWrapper className={open ? 'show' : ''}>
          <StyledNavCenter>
            <Logo />
            <NavBtn onToggle={setOpen} open={open} />
          </StyledNavCenter>
          <NavLinks open={open} />
          <UserLinks user={false} open={open} />
        </StyledNavWrapper>
      </StyledHeader>
      <Spacer />
      <Outlet />
    </>
  );
}
export default Header;
