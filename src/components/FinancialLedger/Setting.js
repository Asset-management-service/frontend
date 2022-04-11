import styled from 'styled-components';
import React, {useState} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const SettingListWrapper = styled.div`
    margin: auto;
`;

const SettingList = styled.div`
    margin: 3em;
`;

function Setting(){

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

    const onModalHandler = () => {
    setIsOpen(!isOpen)
    };


    return(
        <SettingListContent>
            {props.content}
                <ChevronRightRoundedIcon onClick={onModalHandler} >
                {isOpen === false ? "Open Modal" : "Opened"}
                </ChevronRightRoundedIcon>
            
            {isOpen ===false ? null : 
            <div onClick={onModalHandler}>
                <div className="close-btn" onClick={onModalHandler}>&times;</div>
                <div className="desc">HELLO WORLD!</div>
            </div>
    }
        </SettingListContent>
    );
}

//체브론 아이콘을 누르면 모달창 열림
//모달창이 열리면 값을 입력 받아야함
//모달창 안에는 취소버튼과 확인 버튼이 있음.


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