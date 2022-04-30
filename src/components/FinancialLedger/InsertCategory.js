import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonBox } from '../common/Modal';
import { CancelButton, CheckButton } from './StyledComponentInSetting';
import { changeInput } from '../../modules/category';

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

const CategoryButtonBox = styled(ButtonBox)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  button {
    margin: 0 1rem;
    font-size: 20px;
    width: 100px;
    color: black;
  }
`;

function InsertCategory({ onSubmit, onClose }) {
  const { categoryInput } = useSelector(({ category }) => category);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChangeInput = (e) => {
    dispatch(changeInput(e.target.value));
  };

  //엔터 누를 시, 입력이 되도록 설정
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  //취소를 클릭하면, 입력 내용이 없어지도록
  const onCancel = () => {
    dispatch(changeInput(''));
    onClose();
  };

  return (
    <InsertCategoryWrapper>
      <InputBox
        ref={ref}
        type="text"
        placeholder="카테고리를 입력하세요"
        value={categoryInput}
        onChange={handleChangeInput}
        autoFocus
      ></InputBox>
      <CategoryButtonBox>
        <CancelButton onClick={onCancel} className="cancelButton">
          취소
        </CancelButton>
        <CheckButton
          onClick={onSubmit}
          onKeyPress={handleKeyPress}
          className="checkButton"
        >
          추가
        </CheckButton>
      </CategoryButtonBox>
    </InsertCategoryWrapper>
  );
}

export default InsertCategory;
