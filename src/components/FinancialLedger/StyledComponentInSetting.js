import styled from 'styled-components';
import { ButtonBox } from '../common/Modal';
//리스트 컴포넌트 스타일링
export const SettingList = styled.div`
    margin: 3em;
`;

//설정 항목 제목 컴포넌트 스타일링
export const SettingListTitleWrapper = styled.div`
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        width: 49%;
`;

//설정 항목 내용 컴포넌트 스타일링
export const SettingListContentWrapper = styled.div`
        font-size: 17px;
        font-weight: normal;
        margin: 1em;
        display: flex;
        justify-content: space-between;
        width: 49%;
    `;

export const CheckButton = styled(ButtonBox)`
    margin: 0 1rem;
    width: 100px;
    padding: 8px;
    color: #1E88E5;
    background-color: rgb(30,136,229, 0.2);
    border: none;
    font-size: 17px;
    font-weight: bold;
    border-radius: 8px;
`;

export const CancelButton = styled(ButtonBox)`
        margin: 0 1rem;
        font-size: 17px;
        width: 100px;
        padding: 8px;
        color: #FF5858;
        background-color: rgb(255,88, 88 ,0.2);
        border: none;
        font-weight: bold;
        border-radius: 8px;
`;

