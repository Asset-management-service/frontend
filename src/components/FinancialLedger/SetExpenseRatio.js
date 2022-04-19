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
function SetExpenseRatio({content}){
    const [isOpen, setIsOpen] = useState(false);

    const openRatioModalHandler = () => {
        setIsOpen(true);
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeRatioModalHandler = () => {
        setFixRatio(" ");
        setChangeRatio(" ");
        setIsOpen(false);
    }

    const [fixRatio,setFixRatio] = useState(" ");
    const [changeRatio,setChangeRatio] = useState(" ");

    const onFixRatioModalHandler = (event) => { 
        setFixRatio(event.currentTarget.value);
    }

    const onChangeRatioModalHandler = (event) => { 
        setChangeRatio(event.currentTarget.value);
    }

    const onRatioSubmit = (event) => {
        event.preventDefault();
        let check = /^[0-9]+$/;
        if(fixRatio == " " && !check.test(fixRatio) ||  changeRatio == " " && !check.test(changeRatio)){
            document.getElementById('setRatio').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setRatio').style.color='red';
        }

        else if((changeRatio + fixRatio) !== 100){
            document.getElementById('setRatio').innerHTML='<b>총합이 100%가 아닙니다! 다시 입력해주세요!<b>';
            document.getElementById('setRatio').style.color='red';
    }

        else if(changeRatio + fixRatio === 100){
            document.getElementById('showFixRatio').innerHTML=fixRatio;
            document.getElementById('showChangeRatio').innerHTML=changeRatio;
    }
}

    return(
        <SettingListContentWrapper>
            <ContentPropsWrapper onClick={openRatioModalHandler}>{content}</ContentPropsWrapper>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>지출 비율 설정</h1>
                <b>고정비</b><InputBox type="text" className="fixRatio" value={fixRatio} onChange={onFixRatioModalHandler}></InputBox><b>%</b>
                <br></br>
                <b>변동비</b><InputBox type="text" className="changeRatio" value={changeRatio} onChange={onChangeRatioModalHandler}></InputBox><b>%</b>
                <ErrorMessageBox>
                    <span id='setRatio'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <CancelButton onClick={closeRatioModalHandler} >취소</CancelButton>
                    <CheckButton onClick={onRatioSubmit}>확인</CheckButton>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            <span id='showFixRatio'>--</span>
        </SettingListContentWrapper>
    );
}

export default SetExpenseRatio;