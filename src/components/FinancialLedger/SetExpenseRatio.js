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
function SetExpenseRatio(props){
    const [isOpen, setIsOpen] = useState(false);

    const openRatioModalHandler = () => {
        setIsOpen(true);
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeRatioModalHandler = () => {
        setExpenseRatio(" ");
        setIsOpen(false);
    }

    const [expenseRatio,setExpenseRatio] = useState(" ");

    const onRatioModalHandler = (event) => { 
        setExpenseRatio(event.currentTarget.value);
    }

    const onRatioSubmit = (event) => {
        event.preventDefault();
        let check = /^[0-9]+$/;
        if(expenseRatio === null || !check.test(expenseRatio) ){
            document.getElementById('setRatio').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setRatio').style.color='red';
        }
        else if(isNaN(expenseRatio) === false){
            document.getElementById('showRatio').innerHTML=expenseRatio;
            document.getElementById('showRatio').style.color='black';
            setIsOpen(false)
        }
        else if(expenseRatio < -1 || expenseRatio > 101){
            document.getElementById('showRatio').innerHTML='<b>입력 값이 올바르지 않습니다.<b>';
            document.getElementById('showRatio').style.color='black';
        }
        else{
            document.getElementById('setRatio').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setRatio').style.color='red';
        }
    }

    return(
        <SettingListContentWrapper>
            <ContentPropsWrapper onClick={openRatioModalHandler}>{props.content}</ContentPropsWrapper>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>{props.content} 비율 설정</h1>
                <InputBox type="text" className="ratio" value={expenseRatio} onChange={onRatioModalHandler}></InputBox><b>%</b>
                <ErrorMessageBox>
                    <span id='setRatio'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <CancelButton onClick={closeRatioModalHandler} >취소</CancelButton>
                    <CheckButton onClick={onRatioSubmit}>확인</CheckButton>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            <span id='showRatio'>--</span>
        </SettingListContentWrapper>
    );
}

export default SetExpenseRatio;