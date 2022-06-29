import MyBadgeItem from './MyBadgeItem';
import styled from 'styled-components';

const BadgeList = styled.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 5rem;
  justify-content: center;
`;

function MyBadgeList({ badges }) {
  return (
    <section>
      <h2>내 뱃지</h2>
      <BadgeList>
        {badges.map((badge, index) => (
          <MyBadgeItem key={index} badge={badge} />
        ))}
      </BadgeList>
    </section>
  );
}

export default MyBadgeList;
