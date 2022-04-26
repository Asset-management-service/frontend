
//카테고리 설정 액션 타입 정의
const CATEGORY_INPUT = 'category/CATEGORY_INPUT';
const ON_INSERT = 'category/INSERT';
const ON_REMOVE = 'category/REMOVE';
const CHANGE_CATEGORY_MODAL = 'category/CHANGE_CATEGORY_MODAL';
const CHANGE_CATEGORYLIST_MODAL = 'category/CHANGE_CATEGORYLIST_MODAL';

//액션 생성 함수 만들기
export const changeInput = (categoryInput) => ({
  type: CATEGORY_INPUT,
  categoryInput,
});

let id = 4;

//호출될 때마다 id 값에 1씩 더함

export const onInsert = (text, checked) => ({
  type: ON_INSERT,
  item: {
    id: id++,
    text,
    checked,
  },
});

export const onRemove = (id) => ({
  type: ON_REMOVE,
  id,
});

export const changeCategoryModal = (isOpen) => ({
  type: CHANGE_CATEGORY_MODAL,
  id,
});

export const changeCategoryListModal = (isClicked) => ({
  type: CHANGE_CATEGORYLIST_MODAL,
  id,
});
//초기 상태 정의
const initialState = {
  input: '',
  items: [
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
  ],
  isOpen:false,
  isClicked:false,
};

//리듀서 함수 생성 
function category(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case ON_INSERT:
      return {
        ...state,
        itmes: state.category.concat(action.item),
      };
    case ON_REMOVE:
      return {
        ...state,
        items: state.category.filter((item) => item.id !== action.id),
      };
    case CHANGE_CATEGORY_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case CHANGE_CATEGORYLIST_MODAL:
      return {
        ...state,
        isClicked: action.isClicked,
      };


    default:
      return state;
  }
}

export default category;