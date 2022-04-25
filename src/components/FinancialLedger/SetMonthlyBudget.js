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


//한달 예산 금액 설정
function SetMonthlyBudget({content, budget, setBudget, onBudgetHandler, onBudgetSubmit}){
    const [isOpen, setIsOpen] = useState(false);

    const openBudgetModalHandler = () => {
        setIsOpen(true);
    };
    //취소버튼 클릭 시  값 초화
    const closeBudgetModalHandler = () => {
        setBudget(" ")
        setIsOpen(false);
    }

    return(
        <SettingListContentWrapper>
                <ContentPropsWrapper onClick={openBudgetModalHandler}>{content}</ContentPropsWrapper>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <InputBox type="text" className="budget" budgetValue={budget} onBudgetChange={onBudgetHandler}></InputBox>
                <ErrorMessageBox>
                    <span id='setBudget'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <CancelButton onClick={closeBudgetModalHandler} >취소</CancelButton>
                    <CheckButton onBudgetClick={onBudgetSubmit}>확인</CheckButton>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            <span id='showBudget'>--</span>
        </SettingListContentWrapper>
    );
}

export default SetMonthlyBudget;