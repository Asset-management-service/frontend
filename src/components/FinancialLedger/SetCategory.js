
import styled from 'styled-components';
import React, {useState, useRef} from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { ModalWrapper} from '../common/Modal';
import { SettingListContentWrapper, CategoryStyledModal } from './StyledComponentInSetting';
import InsertCategory from './InsertCategory';
import CategoryItemList from './CategoryList';

//아이콘을 클릭하면 입력창이 드도록 설정
const CreateAddCircleOutlinedIcon = styled(AddCircleOutlinedIcon)`
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: ${({ show }) => (show ? 'flex' : 'none')};
     &:hover{
        cursor: pointer;
    }
`;

const CreateChevronRightRoundedIcon= styled(ChevronRightRoundedIcon)`
    &:hover{
        cursor: pointer;
    }
`;

const CreateCloseIcon= styled(CloseIcon)`
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover{
        cursor: pointer;
    }
`;

const CategoryListWrapper = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
`;

//카테고리 설정 컴포넌트
function SetCategory({content}){
    const [items, setItems] = useState([
    { id: 1,
      text: '월급',
      checked: false,
    },
    {
      id: 2,
      text: '주식',
      checked: false,
    },
    {
      id: 3,
      text: '기타',
      checked: false,
    },
  ]);

  const nextId = useRef(0);
  const handleSubmit= (text) => {
    const item = {
      id: nextId.current,
      text,
      checked: false,
    };
    setItems(items.concat(item));
    nextId.current += 1; // nextId를 1씩 더하기
  };

  const onRemove = (id) => {
      setItems(items.filter((item) => item.id !== id));
};

  //모달창 열림 설정
    const [isOpen, setIsOpen] = useState(false);


  //입력창 열림 설정
    const [isClicked, setIsClicked] = useState(false);

    const [isIconClicked, setIsIconClicked] = useState(false);

    const openCategoryModalHandler = () => {
        setIsOpen(true)
    };

     //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeCategoryModalHandler = () => {
        setIsOpen(false)
    }
     //입력 박스 핸들러 조정
    const openInputBoxHandler = () => {
        setIsClicked(true)
    }


    return(
        <SettingListContentWrapper>
            {content}
            <CreateChevronRightRoundedIcon onClick={openCategoryModalHandler}></CreateChevronRightRoundedIcon>
            <ModalWrapper show={isOpen}>
                <CategoryStyledModal >
                    <h1>{content}</h1>
                    <CreateCloseIcon  onClick={closeCategoryModalHandler}></CreateCloseIcon>
                    <CreateAddCircleOutlinedIcon onClick={openInputBoxHandler}></CreateAddCircleOutlinedIcon>
                        <CategoryItemList items={items} onRemove={onRemove}></CategoryItemList>
                    <CategoryListWrapper show={isClicked}>
                        <InsertCategory onSubmit={handleSubmit}></InsertCategory>
                    </CategoryListWrapper>
                </CategoryStyledModal>
                </ModalWrapper>
        </SettingListContentWrapper>
    );
}

export default SetCategory;