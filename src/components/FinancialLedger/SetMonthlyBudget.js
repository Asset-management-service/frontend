import styled from 'styled-components';
import React, {useState} from 'react';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import { SettingListContentWrapper, CheckButton, CancelButton } from './StyledComponentInSetting';


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
function SetMonthlyBudget(props){

    const [isOpen, setIsOpen] = useState(false);

    const openBudgetModalHandler = () => {
        setIsOpen(true);
    };
    //취소버튼 클릭 시  값 초화
    const closeBudgetModalHandler = () => {
        setBudget(" ");
        setIsOpen(false);
    }

    const [budget,setBudget] = useState(" ");

    const onBudgetHandler = (event) => { 
    setBudget(event.currentTarget.value);

    }

    const onBudgetSubmit = (event) => {
        event.preventDefault();
        let check = /^[0-9]+$/;
        if(budget == " " && !check.test(budget) ){
            document.getElementById('setBudget').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
        }
        else if(isNaN(budget) === false && budget > 0){
            document.getElementById('showBudget').innerHTML=budget;
            document.getElementById('showBudget').style.color='black';
            setIsOpen(false)
        }
        else if(budget == 0){
            document.getElementById('setBudget').innerHTML='<b>입력 값이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
        }
        else{
            document.getElementById('setBudget').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
    }
}

    return(
        <SettingListContentWrapper>
            <span onClick={openBudgetModalHandler}>{props.content}</span>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <InputBox type="text" className="budget" value={budget} onChange={onBudgetHandler}></InputBox>
                <ErrorMessageBox>
                    <span id='setBudget'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <CancelButton onClick={closeBudgetModalHandler} >취소</CancelButton>
                    <CheckButton onClick={onBudgetSubmit}>확인</CheckButton>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            <span id='showBudget'>--</span>
        </SettingListContentWrapper>
    );
}

export default SetMonthlyBudget;