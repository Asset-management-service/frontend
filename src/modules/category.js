const CHANGE_CATEGORY_INPUT = 'category/CHANGE_CATEGORY_INPUT';
const SET_CATEGORY = 'category/SET_CATEGORY';
const CATEGORY_INSERT = 'category/CATEGORY_INSERT';
const CATEGORY_REMOVE = 'category/CATEGORY_REMOVE';

//액션 생성 함수 만들기
export const changeInput = (categoryInput) => ({
  type: CHANGE_CATEGORY_INPUT,
  categoryInput,
});

export const setCategory = (categoryType, categories) => ({
  type: SET_CATEGORY,
  categoryType,
  categories,
});

export const insertCategory = (categoryType, categoryId) => ({
  type: CATEGORY_INSERT,
  categoryType,
  categoryId,
});

export const removeCategory = (categoryType, id) => ({
  type: CATEGORY_REMOVE,
  categoryType,
  id,
});

//초기 상태 정의
const initialState = {
  categoryInput: '',
  REVENUE: [],
  FIXED: [],
  PAYMENT: [],
  VARIABLE: [],
};

//리듀서 함수 생성
function category(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_INPUT:
      return {
        ...state,
        categoryInput: action.categoryInput,
      };
    case SET_CATEGORY:
      return {
        ...state,
        [action.categoryType]: action.categories,
      };
    case CATEGORY_INSERT:
      return {
        ...state,
        [action.categoryType]: state[action.categoryType].concat({
          categoryId: action.categoryId,
          categoryName: state.categoryInput,
        }),
      };
    case CATEGORY_REMOVE:
      return {
        ...state,
        [action.categoryType]: state[action.categoryType].filter(
          (category) => category.categoryId !== action.id,
        ),
      };
    default:
      return state;
  }
}

export default category;
