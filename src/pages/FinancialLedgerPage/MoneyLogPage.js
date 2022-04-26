import MoneyLogAssetGoal from '../../components/FinancialLedger/MoneyLogAssetGoal';
import MoneyLogContainer from '../../containers/MoneyLogContainer';
import CalenderContainer from '../../containers/CalenderContainer';
import MoneyLogGuide from '../../components/FinancialLedger/MoneyLogGuide';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  padding: 0.5rem;
  padding-left: 270px;
  .MoneyLogPage-row {
    display: flex;
    flex-direction: column;
  }
`;
function MoneyLogPage() {
  return (
    <Section>
      <div className="MoneyLogPage-row">
        <CalenderContainer extraComponent={<MoneyLogAssetGoal />} />
        <MoneyLogGuide />
      </div>
      <MoneyLogContainer />
    </Section>
  );
}

export default MoneyLogPage;
