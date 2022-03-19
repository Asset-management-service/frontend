import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const NotifyRow = styled.li`
  padding: 1rem 0;
  margin: 0 1rem;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  & + & {
    border-top: 1px solid lightgray;
  }
`;

const NotifyContent = styled(Link)`
  display: flex;
  align-items: ${({ center }) => !center && 'center'};
  opacity: ${({ check }) => (check ? 0.5 : 1)};
  div {
    margin-left: 10px;
    p {
      margin-top: 5px;
      font-size: 13px;
    }
  }
`;

function NotifyItem({ item, onClose }) {
  let path;
  if (item.category === '뱃지') {
    path = '/mypage/badge';
  } else if (item.category === '커뮤니티') {
    path = '/community';
  } else if (item.category === '채팅') {
    path = '/mypage/chat';
  }
  return (
    <NotifyRow>
      <NotifyContent
        check={item.check}
        to={path}
        onClick={onClose}
        center={item.content}
      >
        {item.category === '뱃지' ? (
          <VerifiedOutlinedIcon color="success" />
        ) : item.category === '채팅' ? (
          <ChatOutlinedIcon color="secondary" />
        ) : item.category === '커뮤니티' ? (
          <PeopleOutlinedIcon color="primary" />
        ) : (
          ''
        )}
        <div>
          <h3>{item.title}</h3>
          {item.content && <p>{item.content}</p>}
        </div>
      </NotifyContent>
      <CloseRoundedIcon className="close-icon" color="disabled" />
    </NotifyRow>
  );
}

export default NotifyItem;
