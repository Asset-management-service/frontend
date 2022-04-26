import React from 'react';
import styled from 'styled-components';
import { SettingList } from '../../components/FinancialLedger/StyledComponentInSetting';
import SettingListTitle from '../../components/FinancialLedger/SettingListTitle';
import BudgetContainer from '../../containers/BudgetContainer';
import CategoryContainer from '../../containers/CategoryContainer';
import ExpenseContainer from '../../containers/ExpenseContainer';

function SettingPage() {
  return (
    <section>
      <SettingList>
        <SettingListTitle title="예산 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <BudgetContainer />
      </SettingList>
      <SettingList>
        <SettingListTitle title="카테고리 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <CategoryContainer content="FIXED" />
        <CategoryContainer content="VARIABLE" />
        <CategoryContainer content="REVENUE" />
        <CategoryContainer content="PAYMENT" />
      </SettingList>
      <SettingList>
        <SettingListTitle title="지출 비율 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <ExpenseContainer />
      </SettingList>
    </section>
  );
}

export default SettingPage;
