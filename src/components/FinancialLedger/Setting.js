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
        font-size: 50px;
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

    const openBudgetModalHandler = () => {
    setIsOpen(true)
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeBudgetModalHandler = () => {
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
            <ChevronRightRoundedIcon onClick={openBudgetModalHandler}></ChevronRightRoundedIcon>
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <InputBox type="text" id="budget" value={budget} onChange={onBudgetHandler}></InputBox>
                <ButtonBox>
                    <button onClick={closeBudgetModalHandler}>취소</button>
                    <button onClick={onBudgetSubmit}>확인</button>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            }
        </SettingListContentWrapper>
    );
}

//지출 비율 설정 로직
const SetExpenseRatio = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openRatioModalHandler = () => {
    setIsOpen(true)
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeRatioModalHandler = () => {
        setIsOpen(false)
    }

    const [expenseRatio,setExpenseRatio] = useState(" ");

    const onRatioModalHandler = (event) => { 
    setExpenseRatio(event.currentTarget.value)
    }

    const onRatioSubmit = () => {
        alert("입력되었습니다.")
        //입력 값이 모두 숫자인지, 비어있지 않은지 확인
        //모달창 사라짐
        //확인버튼을 누르면 화면에 해당 금액이 보이도록 설정
    }
    //버튼 스타일링 다시

    return(
        <SettingListContentWrapper>
            {props.content}
            <ChevronRightRoundedIcon onClick={openRatioModalHandler}></ChevronRightRoundedIcon>
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>{props.content} 비율 설정</h1>
                <InputBox type="text" id="expenseRatio" value={expenseRatio} onChange={onRatioModalHandler}></InputBox>
                <ButtonBox>
                    <button onClick={closeRatioModalHandler}>취소</button>
                    <button onClick={onRatioSubmit}>확인</button>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            }
        </SettingListContentWrapper>
    );
}

//카테고리 설정 컴포넌트
const SetCategory = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openCategoryModalHandler = () => {
    setIsOpen(true)
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeCategoryModalHandler = () => {
        setIsOpen(false)
    }

    const [category,SetCategory] = useState(" ");

    const onCategoryModalHandler = (event) => { 
    SetCategory(event.currentTarget.value)
    }

    // + 아이콘, X 버튼, 삭제 아이콘 추가
    // + 아이콘을 누르면 입력창이 뜨도록

    return(
        <SettingListContentWrapper>
            {props.content}
            <ChevronRightRoundedIcon onClick={openCategoryModalHandler}></ChevronRightRoundedIcon>
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>{props.content}</h1>
                <div className="Modal-close-btn" onClick={closeCategoryModalHandler}>&times;</div>
                <InputBox type="text" id="category" value={category} onChange={onCategoryModalHandler}></InputBox>
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
            <SettingList>
                <SettingListTitle title='카테고리 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetCategory content='고정비 카테고리'></SetCategory>
                <SetCategory content='변동비 카테고리'></SetCategory>
                <SetCategory content='수익'></SetCategory>
                <SetCategory content='결제 카고'></SetCategory>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <span id='ratio'></span>
                <hr align='left' width='50%'></hr>
                <SetExpenseRatio content='고정비'></SetExpenseRatio>
                <SetExpenseRatio content='변동비'></SetExpenseRatio>
                <SetExpenseRatio content='투자비'></SetExpenseRatio>
            </SettingList>
        </div>
    );
}

export default Setting;