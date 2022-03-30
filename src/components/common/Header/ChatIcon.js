import { Link } from 'react-router-dom';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
function ChatIcon() {
  return (
    <Link to="/chat">
      <CommentOutlinedIcon />
    </Link>
  );
}

export default ChatIcon;
