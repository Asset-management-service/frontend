import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeInput, insert, remove} from '../modules/category';
import {SetCategory} from '../components/FinancialLedger/SetCategory';


function CategoryContainer({items, id}){
    const [items, setItems] = useState([
     {id: 1,
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

    const onInsert = (text) => {
        const item = {
      id: nextId.current,
      text,
      checked: false,
        };
    setItems(items.concat(item));
    nextId.current += 1;
    };

    const nextId = useRef(0);

    const onRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    //모달창 열림 설정
    const [isOpen, setIsOpen] = useState(false);


  //입력창 열림 설정
    const [isClicked, setIsClicked] = useState(false);

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
        <SetCategory
            item={items}
            value={budget}
            onChange={budgetHandler}
            onSubmit={onInsert}
            onRemove={onRemove}
            onClick1={openCategoryModalHandler}
            onClick2={closeCategoryModalHandler}
            onClick3={openInputBoxHandler}
            show={isOpen}
            categoryshow={isClicked}
        />
    );


}

export default connect(
    state => ({budget: state.Budget.budget},
        ),
    dispatch => ({
      changeInput: () => dispatch(changeInput()),
      onInsert: () => dispatch(onInsert()),
      onRemove: () => dispatch(onRemove()),
    })
)(CategoryContainer);