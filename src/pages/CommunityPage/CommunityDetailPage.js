import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PostDetailContainer from '../../containers/PostDetailContainer';

const StyledButton = styled(Button)`
  font-size: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    font-size: 14px;
  }
`;

function CommunityDetailPage({ id }) {
  const navigate = useNavigate();
  return (
    <section>
      <StyledButton
        outlined={true}
        basiccolor="black"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosRoundedIcon />
      </StyledButton>
      <PostDetailContainer id={id} />
    </section>
  );
}

export default CommunityDetailPage;
