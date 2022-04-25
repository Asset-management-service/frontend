import styled from 'styled-components';
import React, {useState} from 'react';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import { SettingListContentWrapper, CheckButton, CancelButton, ContentPropsWrapper } from './StyledComponentInSetting';

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

//지출 비율 설정 로직
function SetExpenseRatio({content, fixRatio, changeRatio, isOpen, openRatioModalHandler,closeRatioModalHandler}){

    return(
        <SettingListContentWrapper>
                <ContentPropsWrapper onContetnsWrapperClick={openRatioModalHandler}>{content}</ContentPropsWrapper>
                <span id={(content == '고정비') ? 'showFixRatio' : 'showChangeRatio'}>--</span>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>지출 비율 설정</h1>
                <b>고정비</b><InputBox type="text" className="fixRatio" value1={fixRatio} onChange1={onFixRatioHandler}></InputBox><b>%</b>
                <br></br>
                <b>변동비</b><InputBox type="text" className="changeRatio" value2={changeRatio} onChange2={onChangeRatioHandler}></InputBox><b>%</b>
                <ErrorMessageBox>
                    <span id='setRatio'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <CancelButton onCancelButtonClick={closeRatioModalHandler} >취소</CancelButton>
                    <CheckButton onCheckButtonClick={onRatioSubmit}>확인</CheckButton>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
        </SettingListContentWrapper>
    );
}

export default SetExpenseRatio;