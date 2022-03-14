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
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 5;
`;

const StyledNavWrapper = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 1300px) {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const StyledNavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1300px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

const Spacer = styled.div`
  height: 8rem;
`;

function Header() {
  const [open, setOpen] = useToggle(false);
  return (
    <>
      <StyledHeader>
        <StyledNavWrapper>
          <StyledNavCenter>
            <Logo />
            <NavBtn onToggle={setOpen} open={open} />
          </StyledNavCenter>
          <NavLinks open={open} />
          <UserLinks user={false} />
        </StyledNavWrapper>
      </StyledHeader>
      <Spacer />
    </>
  );
}
export default Header;
