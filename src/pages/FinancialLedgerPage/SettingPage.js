import React from 'react';
import styled from 'styled-components';
import SetMonthlyBudget from '../../components/FinancialLedger/SetMonthlyBudget';
import SetCategory from '../../components/FinancialLedger/SetCategory';
import SetExpenseRatio from '../../components/FinancialLedger/SetExpenseRatio';
import { SettingList } from '../../components/FinancialLedger/StyledComponentInSetting';
import SettingListTitle from '../../components/FinancialLedger/SettingListTitle';


const Section = styled.section`
  justify-content: center;
`;

function SettingPage(){
    return(
        <Section>
            <SettingList>
                <SettingListTitle title='예산 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetMonthlyBudget content='한달 예산 금액'></SetMonthlyBudget>
            </SettingList>
            <SettingList>
                <SettingListTitle title='카테고리 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetCategory content='고정비 카테고리'></SetCategory>
                <SetCategory content='변동비 카테고리'></SetCategory>
                <SetCategory content='수익 카테고리'></SetCategory>
                <SetCategory content='결제 카테고리'></SetCategory>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetExpenseRatio content='고정비'></SetExpenseRatio>
                <SetExpenseRatio content='변동비'></SetExpenseRatio>
            </SettingList>
        </Section>
    );
}

export default SettingPage;
