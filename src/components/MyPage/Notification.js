import { useEffect, useRef } from 'react';
import { useToggle } from '../../hooks';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import styled from 'styled-components';
import NotifyItem from './NotifyItem';

const NotifyWrapper = styled.div`
  display: block;
  position: relative;
  span {
    font-size: 15px;
    position: absolute;
    top: 6px;
    right: -3px;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Notification-icon {
    cursor: pointer;
    margin-top: 10px;
  }
  .close-icon {
    cursor: pointer;
  }
`;

const NotifyList = styled.ul`
  width: 400px;
  position: absolute;
  border: 2px solid lightgray;
  top: 0px;
  right: 0;
  transform: translateX(105%);
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  &::after,
  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 10px 0px 14px;
    border-color: lightgray transparent;
    left: -20px;
    top: 13px;
    width: 0;
    transform: rotateZ(90deg);
  }
  &:after {
    border-color: #ffffff transparent;
    left: -17px;
  }
`;

function Notification({ count, notify }) {
  const [toggle, onToggle, setToggle] = useToggle(false);
  const notifyRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifyRef.current && !notifyRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <NotifyWrapper ref={notifyRef}>
      <NotificationsNoneRoundedIcon
        fontSize="large"
        onClick={onToggle}
        className="Notification-icon"
      />
      <span>{count}</span>
      <NotifyList show={toggle}>
        {notify.map((item, index) => (
          <NotifyItem
            item={item}
            key={index}
            onClose={() => setToggle(false)}
          />
        ))}
      </NotifyList>
    </NotifyWrapper>
  );
}

export default Notification;
