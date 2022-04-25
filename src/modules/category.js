//카테고리 설정 액션 타입 정의
const CATEGORY_INPUT = 'category/CATEGORY_INPUT';
const INSERT = 'category/INSERT';
const REMOVE = 'category/REMOVE';

//액션 생성 함수 만들기
export const changeInput = (input) => ({
  type: CATEGORY_INPUT,
  input,
});

let id = 4;
//호출될 때마다 id 값에 1씩 더함

export const insert = (text, checked) => ({
  type: INSERT,
  item: {
    id: id++,
    text,
    checked,
  },
});

export const remove = (id) => ({
  type: REMOVE,
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
};

//리듀서 함수 생성 
function category(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        category: state.category.concat(action.item),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.category.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

export default category;