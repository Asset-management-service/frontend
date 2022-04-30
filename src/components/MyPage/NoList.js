import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import styled from 'styled-components';

const NoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoListText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  opacity: 0.6;
  .NoList-icon {
    transform: scale(2);
    margin-bottom: 2rem;
  }
`;
function NoList({ category }) {
  return (
    <NoListWrapper>
      <NoListText>
        <BorderColorOutlinedIcon className="NoList-icon" />
        {category === 'scrap'
          ? '스크랩한 글이 없습니다'
          : category === 'comment'
          ? '작성한 댓글이 없습니다'
          : '작성한 글이 없습니다'}
      </NoListText>
    </NoListWrapper>
  );
}

export default NoList;
