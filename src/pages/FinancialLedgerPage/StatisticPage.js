import styled from 'styled-components';
import StatisticContainer from '../../containers/StatisticContainer';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 2rem !important;
  padding-right: 2rem !important;
  overflow-x: hidden;
  margin-right: 0 !important;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
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
