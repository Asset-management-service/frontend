import coinBadge from '../../images/coin-badge.png';
import styled from 'styled-components';

const BadgeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  h4 {
    font-size: 20px;
    margin: 0.5rem 0;
  }
  p {
    font-size: 15px;
    opacity: 0.6;
  }
`;
function MyBadgeItem({ badge }) {
  return (
    <BadgeItem>
      {badge.image ? <img src={badge.image} /> : <img src={coinBadge} />}
      <h4>{badge.badge}</h4>
      <p>{badge.date} 획득</p>
    </BadgeItem>
  );
}

export default MyBadgeItem;
