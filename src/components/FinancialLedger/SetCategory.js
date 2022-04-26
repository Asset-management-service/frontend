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

//아이콘을 클릭하면 입력창이 드도록 설정
const CreateAddCircleOutlinedIcon = styled(AddCircleOutlinedIcon)`
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;

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
function SetCategory({ content, items, onRemove, handleSubmit, category }) {
  const [isOpen, setIsOpen] = useState(false);

  //입력창 열림 설정
  const [isClicked, setIsClicked] = useState(false);

  const openCategoryModalHandler = () => {
    setIsOpen(true);
  };

  //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
  const closeCategoryModalHandler = () => {
    setIsOpen(false);
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
          <CreateAddCircleOutlinedIcon
            onClick={openInputBoxHandler}
          ></CreateAddCircleOutlinedIcon>
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
