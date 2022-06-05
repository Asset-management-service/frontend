import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SettingList } from '../../components/FinancialLedger/StyledComponentInSetting';
import SettingListTitle from '../../components/FinancialLedger/SettingListTitle';
import BudgetContainer from '../../containers/BudgetContainer';
import CategoryContainer from '../../containers/CategoryContainer';
import ExpenseContainer from '../../containers/ExpenseContainer';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  width: 50vw;
`;

function SettingPage() {
  const { state } = useLocation();
  useEffect(() => {
    if (state) alert(state);
  }, []);
  return (
    <Section>
      <SettingList>
        <SettingListTitle title="예산 설정"></SettingListTitle>
        <hr width="100%"></hr>
        <BudgetContainer />
      </SettingList>
      <SettingList>
        <SettingListTitle title="카테고리 설정"></SettingListTitle>
        <hr width="100%"></hr>
        <CategoryContainer content="FIXED" />
        <CategoryContainer content="VARIABLE" />
        <CategoryContainer content="REVENUE" />
        <CategoryContainer content="PAYMENT" />
      </SettingList>
      <SettingList>
        <SettingListTitle title="지출 비율 설정"></SettingListTitle>
        <hr width="100%"></hr>
        <ExpenseContainer />
      </SettingList>
    </Section>
  );
}

export default SettingPage;
