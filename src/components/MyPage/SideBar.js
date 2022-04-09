import { NavLink } from 'react-router-dom';
import Palette from '../../lib/Palette';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 1rem 1rem 0 0;
  padding: 1rem 0;
  width: 20vw;
  max-width: 200px;
  border-right: 1px solid lightgray;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  margin: 1rem 0.5rem;
  &:hover {
    background-color: ${Palette.gray[0]};
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 18px;
  font-weight: normal;
  display: block;
  padding: 0.7rem;
  width: 100%;
  text-align: left;
  &.active {
    font-weight: bold;
  }
`;

function SideBar() {
  return (
    <StyledNav>
      <MenuList>
        <MenuItem>
          <MenuLink to="/mypage/edit">개인정보 변경</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/mypage/badge">내 뱃지</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/mypage/post">내가 쓴 글</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/mypage/comment">내가 쓴 댓글</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/mypage/scrap">스크랩 보기</MenuLink>
        </MenuItem>
      </MenuList>
    </StyledNav>
  );
}

export default SideBar;
