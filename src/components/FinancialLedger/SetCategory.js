import styled from 'styled-components';
import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalWrapper, StyledModal} from '../common/Modal';
import {SettingListContentWrapper} from './StyledComponentInSetting';
import InsertCategory from './InsertCategory';
import CategoryItemList from './CategoryList';

//아이콘을 클릭하면 입력창이 드도록 설정
const CreateAddCircleOutlinedIcon = styled(AddCircleOutlinedIcon)`
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: ${({ show }) => (show ? 'flex' : 'none')};
`;

const CategoryListWrapper = styled.div`
    display: ${({ categoryshow }) => (categoryshow ? 'flex' : 'none')};
    flex-direction: column;
`;

//카테고리 설정 컴포넌트
function SetCategory({content,onRemove, onInsert, openCategoryModalHandler, closeCategoryModalHandler, openInputBoxHandler, items, isOpen, isClicked}){

    return(
        <SettingListContentWrapper>
            {content}
            <ChevronRightRoundedIcon onClick1={openCategoryModalHandler}></ChevronRightRoundedIcon>
            <ModalWrapper show={isOpen}>
                <StyledModal>
                <h1>{content}</h1>
                <div className="Modal-close-btn" onClick2={closeCategoryModalHandler}>&times;</div>
                <CreateAddCircleOutlinedIcon onClick3={openInputBoxHandler}></CreateAddCircleOutlinedIcon>
                    <CategoryItemList items={items} onRemove={onRemove}></CategoryItemList>
                <CategoryListWrapper categoryshow={isClicked}>
                    <InsertCategory onSubmit={onInsert}></InsertCategory>
                </CategoryListWrapper>
                </StyledModal>
                </ModalWrapper>
        </SettingListContentWrapper>
    );
}

export default SetCategory;