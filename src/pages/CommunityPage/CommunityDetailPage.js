import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import BoardDetail from '../../components/Community/BoardDetail';
import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

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
  // id 이용해서 게시글 상세 조회 api 작성
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
      <BoardDetail id={id} />
    </section>
  );
}

export default CommunityDetailPage;
