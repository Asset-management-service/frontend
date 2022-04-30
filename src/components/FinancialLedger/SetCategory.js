import React, { useState } from 'react';
import { ModalWrapper } from '../common/Modal';
import InsertCategory from './InsertCategory';
import CategoryList from './CategoryList';
import {
  SettingListContentWrapper,
  CategoryStyledModal,
} from './StyledComponentInSetting';
import { FINANCIAL_CATEGORY } from '../../constants/category';
import styled from 'styled-components';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';

const CreateChevronRightRoundedIcon = styled(ChevronRightRoundedIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const CreateCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const CategoryListWrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
`;

//카테고리 설정 컴포넌트
function SetCategory({ content, onRemove, handleSubmit, category }) {
  const [isOpen, setIsOpen] = useState(false);

  //입력창 열림 설정
  const [isClicked, setIsClicked] = useState(false);

  const openCategoryModalHandler = () => {
    setIsOpen(true);
  };

  //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
  const closeCategoryModalHandler = () => {
    setIsOpen(false);
    setIsClicked(false);
  };
  //입력 박스 핸들러 조정
  const openInputBoxHandler = () => {
    setIsClicked(true);
  };

  const closeInputBoxHandler = () => {
    setIsClicked(false);
  };

  return (
    <SettingListContentWrapper>
      <p>{FINANCIAL_CATEGORY[content]}</p>
      <CreateChevronRightRoundedIcon onClick={openCategoryModalHandler} />
      <ModalWrapper show={isOpen}>
        <CategoryStyledModal>
          <h1>{FINANCIAL_CATEGORY[content]}</h1>
          <CreateCloseIcon
            onClick={closeCategoryModalHandler}
          ></CreateCloseIcon>
          <AddCircleOutlinedIcon
            onClick={openInputBoxHandler}
            className={isClicked ? 'blind addIcon' : 'addIcon'}
          />
          <CategoryList items={category[content]} onRemove={onRemove} />
          <CategoryListWrapper show={isClicked}>
            <InsertCategory
              onSubmit={handleSubmit}
              onClose={closeInputBoxHandler}
            ></InsertCategory>
          </CategoryListWrapper>
        </CategoryStyledModal>
      </ModalWrapper>
    </SettingListContentWrapper>
  );
}

export default SetCategory;
