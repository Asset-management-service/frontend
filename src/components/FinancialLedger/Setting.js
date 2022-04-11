import styled from 'styled-components';
import React, {useState} from 'react';
import { render } from '@testing-library/react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const SettingListWrapper = styled.div`
    margin: auto;
`;

const SettingList = styled.div`
    margin: 3em;
`;

function Setting(){

    function SettingListTitle(props){

    const SettingListTitle = styled.div`
        font-size: 20px;
        font-weight: bold;
    `;

    return(
        <SettingListTitle>{props.title}</SettingListTitle>
    );
}

    function SettingListContent(props){

    const SettingListContent = styled.div`
        font-size: 17px;
        font-weight: normal;
        margin: 1em;
        display: flex;
        justify-content: space-between;
    `;

    return(
        <SettingListContent>
            {props.content}
            <ChevronRightRoundedIcon />
        </SettingListContent>
    );
}


    return(
        <SettingListWrapper>
            <SettingList>
                <SettingListTitle title='예산 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='한달 예산 금액'></SettingListContent>
            </SettingList>
            <SettingList>
                <SettingListTitle title='카테고리 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='고정비 카테고리'></SettingListContent>
                <SettingListContent content='변동비 카테고리'></SettingListContent>
                <SettingListContent content='수익 카테고리'></SettingListContent>
                <SettingListContent content='결제 카테고리'></SettingListContent>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='고정비'></SettingListContent>
                <SettingListContent content='변동비'></SettingListContent>
            </SettingList>
        </SettingListWrapper>
    );
}

export default Setting;