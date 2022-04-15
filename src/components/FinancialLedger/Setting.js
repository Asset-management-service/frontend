import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import SetMonthlyBudget from './SetMonthlyBudget';
import SetCategory from './SetCategory';
import SetExpenseRatio from './SetExpenseRatio';
import { SettingList } from './StyledComponentInSetting';
import SettingListTitle from './SettingListTitle';

function Setting(){
    return(
        <div>
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
                <SetCategory content='수익'></SetCategory>
                <SetCategory content='결제 카테고리'></SetCategory>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetExpenseRatio content='고정비'></SetExpenseRatio>
                <SetExpenseRatio content='변동비'></SetExpenseRatio>
                <SetExpenseRatio content='투자비'></SetExpenseRatio>
            </SettingList>
        </div>
    );
}

export default Setting;
