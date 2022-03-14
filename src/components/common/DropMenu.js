import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

const DropMenuWrapper = styled.div`
  display: inline-block;
  margin-left: 10rem;
  position: relative;
`;

const DropMenuBtn = styled.button`
  width: 15px;
  display: flex;
  justify-content: center;
`;

const Menus = styled.ul`
  position: absolute;
  border-radius: 15px;
  right: 0;
  width: 130px;
  height: 0;
  overflow: hidden;
  transition: all 0.2s linear;

  &.show {
    height: 86px;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Menu = styled.li`
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: lightgray;
  }
`;
export function DropMenu({ menus }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <DropMenuWrapper>
      <DropMenuBtn onClick={onToggle}>
        <MoreVertIcon className="DropMenu-icon" />
      </DropMenuBtn>

      <Menus className={open ? 'show' : ''}>
        {menus.map((menu) => (
          <Menu key={menu.id}>{menu.menu}</Menu>
        ))}
      </Menus>
    </DropMenuWrapper>
  );
}
