import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Button } from '../common/Button';

const SettingListWrapper = styled.div`
    margin: auto;
`;

const SettingList = styled.div`
    margin: 3em;
`;

function SettingListTitle(props){

    const SettingListTitle = styled.div`
        font-size: 20px;
        font-weight: bold;
    `;

    return(
        <SettingListTitle>{props.title}</SettingListTitle>
    );
}

function SettingListContent(props){

    const SettingListContent = styled.div`
        font-size: 17px;
        font-weight: normal;
        margin: 1em;
        display: flex;
        justify-content: space-between;
        width: 49%;
    `;

    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
    setIsOpen(true)
    };

    const closeModalHandler = () => {
    setIsOpen(false)
    };


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

const [money,setMoney] = useState(" ");

const onMoneyHandler = (event) => { //이메일 재설정
    setMoney(event.currentTarget.value)
}

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


    return(
        <SettingListContent>
            {props.content}
                <ChevronRightRoundedIcon onClick={openModalHandler}>
                </ChevronRightRoundedIcon>
            
            {isOpen ===false ? null : 
            <ModalWrapper>
                <StyledModal>
                <div className="Modal-close-btn" onClick={closeModalHandler}>&times;</div>
                <h1>한달 예산 금액 설정</h1>
                <input type="text" id="money" value={money} onChange={onMoneyHandler}></input>
                <ButtonBox>확인</ButtonBox>
                </StyledModal>
            </ModalWrapper>
            
    }
        </SettingListContent>
    );
}

//체브론 아이콘을 누르면 모달창 열림
//모달창이 열리면 값을 입력 받아야함
//모달창 안에는 취소버튼과 확인 버튼이 있음.



function Setting(){



    

    return(
        <SettingListWrapper>
            <SettingList>
                <SettingListTitle title='예산 설정'>
                    
                </SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='한달 예산 금액'></SettingListContent>
            </SettingList>
            <SettingList>
                <SettingListTitle title='카테고리 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='고정비 카테고리'></SettingListContent>
                <SettingListContent content='변동비 카테고리'></SettingListContent>
                <SettingListContent content='수익 카테고리'></SettingListContent>
                <SettingListContent content='결제 카테고리'></SettingListContent>
            </SettingList>
            <SettingList>
                <SettingListTitle title='지출 비율 설정'></SettingListTitle>
                <hr align='left' width='50%'></hr>
                <SettingListContent content='고정비'></SettingListContent>
                <SettingListContent content='변동비'></SettingListContent>
            </SettingList>
        </SettingListWrapper>
    );
}

export default Setting;