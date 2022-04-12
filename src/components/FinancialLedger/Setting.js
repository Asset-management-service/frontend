import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Button } from '../common/Button';
import { letterSpacing } from '@mui/system';

//리스트 컴포넌트 스타일링
const SettingList = styled.div`
    margin: 3em;
`;

//설정 항목 제목 컴포넌트 스타일링
const SettingListTitleWrapper = styled.div`
        font-size: 20px;
        font-weight: bold;
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

//모달창 스타일링
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    display: flex;
`;

const StyledModal = styled.div`
    padding: 3rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    h1 {
        font-size: 30px;
        border-bottom: 1px solid lightgray;
        padding: 0.5rem 4rem 1rem;
        font-weight: normal;
        margin-bottom: 3rem;
    }
    .Modal-close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        svg {
        font-size: 30px;
        }
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    button {
        margin: 0 1rem;
        font-size: 20px;
        width: 100px;
        color: black;
        background-color: lightblue;
    }
`;

//예산 설정 입력 박스
const InputBox = styled.input`
    border: 2px solid lightgray;
    border-radius: 3px;
    justify-content: center;
    font-size: 20px;
    margin: 1em;
`;

//설정 항목 제목 설정 컴포넌트
const SettingListTitle = (props) =>{
    return(
        <SettingListTitleWrapper>{props.title}</SettingListTitleWrapper>
    );
}

//한달 예산 금액 설정
const SetMonthlyBudget = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
    setIsOpen(true)
    let budgetValue = document.getElementById('budget'); 
    budgetValue.value = null;
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeModalHandler = () => {
        setIsOpen(false)
    }

    const [budget,setBudget] = useState(" ");

    const onBudgetHandler = (event) => { 
    setBudget(event.currentTarget.value)
    }

    const onBudgetSubmit = () => {
        alert("입력되었습니다.")
        //입력 값이 모두 숫자인지, 비어있지 않은지 확인
        //모달창 사라짐
        //확인버튼을 누르면 화면에 해당 금액이 보이도록 설정
    }


    return(
        <SettingListContentWrapper>
            {props.content}
            <ChevronRightRoundedIcon onClick={openModalHandler}></ChevronRightRoundedIcon>
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <InputBox type="text" id="budget" value={budget} onChange={onBudgetHandler}></InputBox>
                <ButtonBox>
                    <button onClick={closeModalHandler}>취소</button>
                    <button onClick={onBudgetSubmit}>확인</button>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            }
        </SettingListContentWrapper>
    );
}


function Setting(){


    return(
        <div>
            <SettingList>
                <SettingListTitle title='예산 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetMonthlyBudget content='한달 예산 금액'></SetMonthlyBudget>
            </SettingList>
        </div>
    );
}

export default Setting;