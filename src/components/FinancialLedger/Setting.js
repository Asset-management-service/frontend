import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';

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

//인풋 박스
const InputBoxWrapper = styled.div`
    justify-content: center;
    font-size: 15px;
    display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
`;


function Setting(){
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
        if(budget === null || !check.test(budget) ){
            document.getElementById('setBudget').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
        }
        else if(isNaN(budget) === false){
            document.getElementById('showBudget').innerHTML=budget;
            document.getElementById('showBudget').style.color='black';
            setIsOpen(false)
        }
        else if(budget < 0){
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
            {isOpen === false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <InputBox type="text" className="budget" value={budget} onChange={onBudgetHandler}></InputBox>
                <ErrorMessageBox>
                    <span id='setBudget'></span>
                </ErrorMessageBox>
                <ButtonBox>
                    <button onClick={closeBudgetModalHandler} className="cancelButton">취소</button>
                    <button onClick={onBudgetSubmit} className="checkButton">확인</button>
                </ButtonBox>
                </StyledModal>
            </ModalWrapper>
            }
            <span id='showBudget'>--</span>
        </SettingListContentWrapper>
    );
}

//카테고리 설정 컴포넌트
const SetCategory = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isClicked, setIsClicked] = useState(false);

    //모달창 하단의 아이콘을 클릭하면 입력창이 열리도록 함
    const openInputBoxHandler = () => {
        setIsClicked(true)

    };


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

    const StyledAddCircleOutlinedIcon = {
        position: 'absolute',
        bottom: '10px;',
        right: '20px',
        display: 'flex'
    };

    // + 아이콘, X 버튼, 삭제 아이콘 추가
    // + 아이콘을 누르면 입력창이 뜨도록

    return(
        <SettingListContentWrapper>
            {props.content}
            <ChevronRightRoundedIcon onClick={openCategoryModalHandler}></ChevronRightRoundedIcon>
            {isOpen === false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>{props.content}</h1>
                <div className="Modal-close-btn" onClick={closeCategoryModalHandler}>&times;</div>
                <AddCircleOutlinedIcon onclick={openInputBoxHandler} style={StyledAddCircleOutlinedIcon}></AddCircleOutlinedIcon>
                    {isClicked === true?
                        <InputBoxWrapper>
                            <InputBox type="text" id="category" value={category} onChange={onCategoryModalHandler}></InputBox>
                        </InputBoxWrapper>
                        : null
                    }
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
        else if(expenseRatio < 0 || expenseRatio > 100){
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
                <SetCategory content='결제 카테고리'></SetCategory>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SetExpenseRatio content='고정비'></SetExpenseRatio>
                <SetExpenseRatio content='변동비'></SetExpenseRatio>
                <SetExpenseRatio content='투자비'></SetExpenseRatio>
            </SettingList>
        </div>
    );
}

export default Setting;