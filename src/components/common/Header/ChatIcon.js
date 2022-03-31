import { Link } from 'react-router-dom';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import styled from 'styled-components';

const ChatLink = styled(Link)`
  .ChatIcon-icon {
    font-size: 28px;
  }
`;
function ChatIcon() {
  return (
    <ChatLink to="/chat">
      <CommentOutlinedIcon className="ChatIcon-icon" />
    </ChatLink>
  );
}

export default ChatIcon;
