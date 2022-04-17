import { useEffect, useRef } from 'react';
import { useToggle } from '../../hooks';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

const DropMenuWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropMenuBtn = styled.button`
  width: 15px;
  display: flex;
  justify-content: center;
`;

const Menus = styled.ul`
  background: #fff;
  position: absolute;
  border-radius: 15px;
  right: 0;
  width: 150px;
  height: 0;
  overflow: hidden;
  transition: all 0.2s linear;

  &.show {
    height: ${({ height }) => (height ? `${height}px` : '100px')};
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Menu = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  button {
    font-size: 15px;
    width: 100%;
    padding: 0.4rem 1rem;
  }
  &:hover {
    background-color: lightgray;
  }
`;
export function DropMenu({ menus, height }) {
  const [toggle, onToggle, setToggle] = useToggle(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <DropMenuWrapper ref={menuRef} className="DropMenu">
      <DropMenuBtn onClick={onToggle}>
        <MoreVertIcon className="DropMenu-icon" />
      </DropMenuBtn>

      <Menus className={toggle ? 'show' : ''} height={height}>
        {menus.map((menu) => (
          <Menu key={menu.id}>{menu.menu}</Menu>
        ))}
      </Menus>
    </DropMenuWrapper>
  );
}
