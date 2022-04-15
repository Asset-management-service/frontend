import styled from 'styled-components';
import React, {useState} from 'react';
//지출 비율 설정 로직
function SetExpenseRatio{
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
            <span onClick={openRatioModalHandler}>{props.content}</span>
            {isOpen === false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>{props.content} 비율 설정</h1>
                <InputBox type="text" className="ratio" value={expenseRatio} onChange={onRatioModalHandler}></InputBox><b>%</b>
                <ErrorMessageBox>
                    <span id='setRatio'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <button onClick={closeRatioModalHandler} className="cancelButton">취소</button>
                    <button onClick={onRatioSubmit} className="checkButton">확인</button>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            }
            <span id='showRatio'>--</span>
        </SettingListContentWrapper>
    );
}