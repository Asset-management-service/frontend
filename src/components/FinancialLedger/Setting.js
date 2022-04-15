import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import DeleteIcon from '@mui/icons-material/Delete';

//리스트 컴포넌트 스타일링
const SettingList = styled.div`
    margin: 3em;
`;

//설정 항목 제목 컴포넌트 스타일링
const SettingListTitleWrapper = styled.div`
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        width: 49%;
`;

//설정 항목 내용 컴포넌트 스타일링
const SettingListContentWrapper = styled.div`
        font-size: 17px;
        font-weight: normal;
        margin: 1em;
        display: flex;
        justify-content: space-between;
        width: 49%;
    `;
//예산 설정 입력 박스
const InputBox = styled.input`
    border: 2px solid black;
    border-radius: 5px;
    justify-content: center;
    font-size: 20px;
    padding: 3px;
    margin: 1em;
`;

//에러 메시지 박스
const ErrorMessageBox = styled.div`
    justify-content: center;
    font-size: 15px;
`;

//인풋 박스
const InputBoxWrapper = styled.div`
    justify-content: center;
    font-size: 15px;
`;


function Setting(){
//설정 항목 제목 설정 컴포넌트
const SettingListTitle = (props) =>{
    return(
        <SettingListTitleWrapper>{props.title}</SettingListTitleWrapper>
    );
}

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
