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

//한달 예산 금액 설정
function SetMonthlyBudget({
  budgetAmount,
  budgetInput,
  onBudgetChange,
  onBudgetSubmit,
  openBudgetModalHandler,
  closeBudgetModalHandler,
  show,
  error,
  errorMessage,
}) {
  return (
    <SettingListContentWrapper>
      <ContentPropsWrapper onClick={openBudgetModalHandler}>
        한달 예산 금액 설정
        <p>{!budgetAmount ? '--' : '₩' + budgetAmount.toLocaleString()}</p>
      </ContentPropsWrapper>
      <ModalWrapper show={show}>
        <StyledModal>
          <h1>한달 예산 금액</h1>
          <InputBox
            type="text"
            className="budget"
            value={budgetInput}
            onChange={onBudgetChange}
          ></InputBox>
          <ErrorMessageBox>
            <span>{error ? errorMessage : ''}</span>
          </ErrorMessageBox>
          <ButtonBox>
            <CancelButton onClick={closeBudgetModalHandler}>취소</CancelButton>
            <CheckButton onClick={onBudgetSubmit}>확인</CheckButton>
          </ButtonBox>
        </StyledModal>
      </ModalWrapper>
    </SettingListContentWrapper>
  );
}

export default SetMonthlyBudget;
