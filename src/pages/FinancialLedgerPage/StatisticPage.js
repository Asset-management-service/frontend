import { useState } from 'react';
import { ComboBox } from '../../components/common/ComboBox';
import WeekStatistic from '../../components/FinancialLedger/WeekStatistic';
import styled from 'styled-components';
import MonthStatistic from '../../components/FinancialLedger/MonthStatistic';
import YearStatistic from '../../components/FinancialLedger/YearStatistic';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 0 !important;
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
  .ComboBox {
    align-self: flex-end;
    width: 100px;
  }
`;

function StatisticPage() {
  const [standard, setStandard] = useState('일주일');
  const onChange = (value) => {
    setStandard(value);
  };
  return (
    <Section>
      <ComboBox
        categories={['일주일', '한달', '일년']}
        onChange={onChange}
        initialLabel="일주일"
      />
      {standard === '일주일' ? (
        <WeekStatistic />
      ) : standard === '한달' ? (
        <MonthStatistic />
      ) : (
        <YearStatistic />
      )}
    </Section>
  );
}

export default StatisticPage;
