import styled from 'styled-components';
import React, {useState} from 'react';
import { ModalWrapper, StyledModal, ButtonBox} from '../common/Modal';
import { CancelButton, SettingListContentWrapper, CheckButton } from './StyledComponentInSetting';

const InputBox = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    justify-content: center;
    font-size: 20px;
    padding: 3px;
    margin: 1em;
    justify-content: center;
`;

const InsertCategoryWrapper = styled.div`
    border-top: 1px solid black;
`;



function InsertCategory(){
    const [isOpen, setIsOpen] = useState(false);
    //카테고리 입력 상태
    const [category,SetCategory] = useState(" ");

    //카레고리 입력값 설정
    const onCategoryModalHandler = (event) => { 
    SetCategory(event.currentTarget.value)
    }

    //취소를 클릭하면, 다시 아이콘이 뜨도록 설정하고 싶음
     const closeCategoryInputHandler = () => {
        setIsOpen(false)
    }

    return(
        <InsertCategoryWrapper>
            <InputBox type="text" id="category" placeholder="카테고리를 입력하세요" value={category} onChange={onCategoryModalHandler}></InputBox>
            <ButtonBox>
                <CancelButton onClick={closeCategoryInputHandler} className="cancelButton">취소</CancelButton>
                <CheckButton className=" checkButton">추가</CheckButton>
            </ButtonBox>
        </InsertCategoryWrapper>
    );
}

export default InsertCategory;