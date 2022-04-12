import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Button } from '../common/Button';

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
    }
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
    };

    const [budget,setBudget] = useState(" ");

    const onMoneyHandler = (event) => { //이메일 재설정
    setBudget(event.currentTarget.value)
    }


    return(
        <SettingListContentWrapper>
            {props.content}
            <ChevronRightRoundedIcon onClick={openModalHandler}></ChevronRightRoundedIcon>
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <h1>한달 예산 금액</h1>
                <input type="text" id="money" value={budget} onChange={onMoneyHandler}></input>
                <ButtonBox>
                    <button>버튼</button>
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