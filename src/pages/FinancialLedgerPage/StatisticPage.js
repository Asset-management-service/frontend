import styled from 'styled-components';
import StatisticContainer from '../../containers/StatisticContainer';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 90vw;
  margin: 0 auto;
  max-width: 1500px;
  ::-webkit-scrollbar {
    display: none;
  }
  .btns {
    align-self: flex-end;
    display: flex;
    align-items: center;
  }
  .shareBtn {
    margin: 5px 0 0 10px;
  }
  .ComboBox {
    width: 100px;
  }
`;

function StatisticPage() {
  return (
    <Section>
      <StatisticContainer />
    </Section>
  );
}

export default StatisticPage;
