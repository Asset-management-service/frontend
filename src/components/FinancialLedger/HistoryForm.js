import { ComboBox } from '../../components/common/ComboBox';
import { FormInput } from '../../components/common/FormInput';
import { Button } from '../../components/common/Button';
import CalenderContainer from '../../containers/CalenderContainer';
import styled, { css } from 'styled-components';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Modal = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

const StyledForm = styled.form`
  overflow-y: scroll;
  max-height: 90vh;
  border-radius: 10px;
  padding: 2rem;
  font-size: 15px;
  background-color: white;
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }

  input {
    font-size: 15px;
    &::placeholder {
      font-size: 15px;
    }
  }
  h2 {
    font-size: 20px;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 1rem;
  }
  .HistoryForm-row {
    margin-bottom: 2rem;
  }
  .radioBtns {
    display: flex;
  }
  .Calender {
    width: 260px;
    .changeBtns {
      justify-content: center;
    }
    td {
      width: 34px;
      height: 34px;
    }
    th,
    td {
      font-size: 13px;
    }
  }
`;

const RadioButton = styled.label`
  cursor: pointer;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  margin: 0 0.5rem;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: #f5f5f5;
          color: #aaaaaa;
        `}
  input[type='radio'],
  input[type='radio']:checked {
    appearance: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const StyledButton = styled(Button)`
  color: #ff5858;
  background-color: #ffdede;
  font-size: 13px;
  font-weight: bold;
  &.cancelBtn {
    color: #ff5858;
    background-color: #ffdede;
  }
  &.submitBtn {
    color: #1e88e5;
    background-color: #d2e7fa;
  }
`;
function HistoryForm({
  history,
  onChange,
  onCancel,
  onSubmit,
  categories,
  payments,
  show,
  onOpen,
}) {
  const {
    revenueExpenditureType,
    category,
    price,
    content,
    payment,
    isEdit,
    categoryType,
  } = history;
  return (
    <>
      <Modal show={show}>
        <StyledForm>
          <h2>수익 지출 내역 {isEdit ? '수정' : '추가'}</h2>
          <div>
            <h3>유형</h3>
            <div className="radioBtns HistoryForm-row">
              <RadioButton
                isChecked={revenueExpenditureType === 'REVENUE' ? 'true' : ''}
              >
                <input
                  type="radio"
                  name="revenueExpenditureType"
                  value="REVENUE"
                  onChange={onChange}
                />
                수익
              </RadioButton>
              <RadioButton
                isChecked={
                  revenueExpenditureType === 'EXPENDITURE' ? 'true' : ''
                }
              >
                <input
                  type="radio"
                  name="revenueExpenditureType"
                  value="EXPENDITURE"
                  onChange={onChange}
                />
                지출
              </RadioButton>
            </div>
            <div className="HistoryForm-row">
              <h3>날짜</h3>
              <CalenderContainer noChevron="true" noComboBox="true" />
            </div>

            <div className="HistoryForm-row">
              <h3>카테고리</h3>
              {revenueExpenditureType === 'EXPENDITURE' && (
                <div className="radioBtns HistoryForm-row">
                  <RadioButton
                    isChecked={categoryType === 'FIXED' ? 'true' : ''}
                  >
                    <input
                      type="radio"
                      name="categoryType"
                      value="FIXED"
                      onChange={onChange}
                    />
                    고정비
                  </RadioButton>
                  <RadioButton
                    isChecked={categoryType === 'VARIABLE' ? 'true' : ''}
                  >
                    <input
                      type="radio"
                      name="categoryType"
                      value="VARIABLE"
                      onChange={onChange}
                    />
                    변동비
                  </RadioButton>
                </div>
              )}
              <ComboBox
                categories={categories}
                initialLabel={category ? category : '선택하기'}
                onChange={(label) =>
                  onChange({ target: { value: label, name: 'category' } })
                }
              />
            </div>
            {revenueExpenditureType === 'EXPENDITURE' && (
              <div className="HistoryForm-row">
                <h3>결제수단</h3>
                <ComboBox
                  categories={payments}
                  initialLabel={payment ? payment : '선택하기'}
                  onChange={(label) =>
                    onChange({ target: { value: label, name: 'payment' } })
                  }
                />
              </div>
            )}
            <div className="HistoryForm-row">
              <h3>금액</h3>
              <FormInput
                value={price}
                name="price"
                type="text"
                placeholder="숫자만 입력해주세요"
                onChange={onChange}
              />
            </div>
            <div className="HistoryForm-row">
              <h3>내용</h3>
              <FormInput
                value={content}
                name="content"
                type="text"
                placeholder="무슨 활동이었나요?"
                onChange={onChange}
              />
            </div>
          </div>
          <ButtonBox>
            <StyledButton
              type="button"
              onClick={onCancel}
              className="cancelBtn"
            >
              취소
            </StyledButton>
            <StyledButton
              type="submit"
              className="submitBtn"
              onClick={onSubmit}
            >
              {isEdit ? '수정' : '추가'}
            </StyledButton>
          </ButtonBox>
        </StyledForm>
      </Modal>
      <AddBoxOutlinedIcon className="plusBtn" onClick={onOpen} />
    </>
  );
}

export default HistoryForm;
