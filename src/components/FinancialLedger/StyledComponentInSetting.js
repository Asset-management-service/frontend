import styled from 'styled-components';
import { ButtonBox, StyledModal } from '../common/Modal';
//리스트 컴포넌트 스타일링
export const SettingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  margin-bottom: 8em;
`;

//설정 항목 제목 컴포넌트 스타일링
export const SettingListTitleWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 49%;
`;

//설정 항목 내용 컴포넌트 스타일링
export const SettingListContentWrapper = styled.div`
  font-size: 17px;
  font-weight: normal;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  width: 49%;
  .SetExpenseRatio-wrapper {
    width: 100%;
  }
`;

export const CheckButton = styled(ButtonBox)`
  margin: 0 1rem;
  width: 100px;
  padding: 8px;
  color: #1e88e5;
  background-color: rgb(30, 136, 229, 0.2);
  border: none;
  font-size: 17px;
  font-weight: bold;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled(ButtonBox)`
  margin: 0 1rem;
  font-size: 17px;
  width: 100px;
  padding: 8px;
  color: #ff5858;
  background-color: rgb(255, 88, 88, 0.2);
  border: none;
  font-weight: bold;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentPropsWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const CategoryStyledModal = styled(StyledModal)`
  padding: 1.5em;
`;
