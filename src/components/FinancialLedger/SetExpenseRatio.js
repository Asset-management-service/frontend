import styled from 'styled-components';
import React from 'react';
import { ModalWrapper, StyledModal, ButtonBox } from '../common/Modal';
import {
  SettingListContentWrapper,
  CheckButton,
  CancelButton,
  ContentPropsWrapper,
} from './StyledComponentInSetting';

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
  color: red;
`;

//지출 비율 설정 로직
function SetExpenseRatio({
  ratioInput,
  fixRatio,
  variableRatio,
  onChangeExpenseRatio,
  onRatioSubmit,
  openRatioModalHandler,
  closeRatioModalHandler,
  error,
  errorMessage,
  show,
}) {
  return (
    <SettingListContentWrapper>
      <div className="SetExpenseRatio-wrapper">
        <ContentPropsWrapper onClick={openRatioModalHandler}>
          고정비
          <p>{fixRatio === '' ? '--' : fixRatio}%</p>
        </ContentPropsWrapper>
        <ContentPropsWrapper onClick={openRatioModalHandler}>
          변동비
          <p>{variableRatio === '' ? '--' : variableRatio}%</p>
        </ContentPropsWrapper>
      </div>
      <ModalWrapper show={show}>
        <StyledModal>
          <h1>지출 비율 설정</h1>
          <b>고정비</b>
          <InputBox
            type="text"
            name="fixRatio"
            value={ratioInput.fixRatio}
            onChange={onChangeExpenseRatio}
          ></InputBox>
          <b>%</b>
          <br></br>
          <b>변동비</b>
          <InputBox
            type="text"
            name="variableRatio"
            value={ratioInput.variableRatio}
            onChange={onChangeExpenseRatio}
          ></InputBox>
          <b>%</b>
          <ErrorMessageBox>
            <span>{error ? errorMessage : ''}</span>
          </ErrorMessageBox>
          <ButtonBox>
            <CancelButton onClick={closeRatioModalHandler}>취소</CancelButton>
            <CheckButton onClick={onRatioSubmit}>확인</CheckButton>
          </ButtonBox>
        </StyledModal>
      </ModalWrapper>
    </SettingListContentWrapper>
  );
}

export default SetExpenseRatio;
