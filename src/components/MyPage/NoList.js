import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import styled from 'styled-components';

const NoListText = styled.p`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  .NoList-icon {
    transform: scale(2);
    margin-bottom: 2rem;
  }
`;
function NoList({ category }) {
  return (
    <NoListText className="NoList">
      <BorderColorOutlinedIcon className="NoList-icon" />
      {category === 'scrap'
        ? '스크랩한 글이 없습니다'
        : category === 'comment'
        ? '작성한 댓글이 없습니다'
        : '작성한 글이 없습니다'}
    </NoListText>
  );
}

export default NoList;
