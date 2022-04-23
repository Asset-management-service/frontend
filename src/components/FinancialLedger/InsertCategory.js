import styled from 'styled-components';
import React, {useState, useEffect, useRef} from 'react';
import {ButtonBox} from '../common/Modal';
import { CancelButton, CheckButton } from './StyledComponentInSetting';

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

function InsertCategory(props){
    
    const [categoryContent, setCategoryContent] = useState("");
    const ref = useRef();

     //카레고리 입력값 설정
    const onCategorySetHandler = (event) => { 
    setCategoryContent(event.currentTarget.value)
    }

    //엔터 누를 시, 입력이 되도록 설정
    const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

   const handleSubmit = (event) => {
    event.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
    if (!categoryContent) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(categoryContent);
    setCategoryContent("");
    // submit을 한 후에는 input 창을 비우기
  };

    useEffect(() => {
    ref.current.focus();
    }, []);

    //취소를 클릭하면, 입력 내용이 없어지도록
     const closeCategoryInputHandler = () => {
        setCategoryContent(" ")
    }

    return(
        <InsertCategoryWrapper>
            <InputBox ref={ref} type="text" id="category" placeholder="카테고리를 입력하세요" value={categoryContent} onChange={onCategorySetHandler} autoFocus></InputBox>
            <ButtonBox>
                <CancelButton onClick={closeCategoryInputHandler} className="cancelButton">취소</CancelButton>
                <CheckButton onClick={handleSubmit} onKeyPress={handleKeyPress} className="checkButton">추가</CheckButton>
            </ButtonBox>
        </InsertCategoryWrapper>
    );
}

export default InsertCategory;