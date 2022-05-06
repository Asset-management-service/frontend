const SET_SHOW = 'history/SET_SHOW';
const SET_HISTORY = 'history/SET_HISTORY';
const CHANGE_INPUT = 'history/CHANGE_INPUT';
const SET_ISEDIT = 'history/SET_ISEDIT';
const SET_CATEGORY_TYPE = 'history/SET_CATEGORY_TYPE';

export const setShow = (value) => ({
  type: SET_SHOW,
  value,
});
export const setHistory = (value) => ({
  type: SET_HISTORY,
  value,
});
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const setIsEdit = (isEdit, id) => ({
  type: SET_ISEDIT,
  isEdit,
  id,
});

export const setCategoryType = (categoryType) => ({
  type: SET_CATEGORY_TYPE,
  categoryType,
});

const initialState = {
  show: false,
  revenueExpenditureType: 'REVENUE',
  payment: '',
  category: '',
  categoryType: 'REVENUE',
  price: '',
  content: '',
  isEdit: false,
  id: null,
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        show: action.value,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_HISTORY:
      const {
        revenueExpenditureType,
        payment,
        category,
        price,
        content,
        isEdit,
        id,
        categoryType,
      } = action.value;
      return {
        ...state,
        revenueExpenditureType:
          revenueExpenditureType === undefined
            ? state.revenueExpenditureType
            : revenueExpenditureType,
        payment: payment === undefined ? state.payment : payment,
        category: category === undefined ? state.category : category,
        price: price === undefined ? state.price : price,
        content: content === undefined ? state.content : content,
        categoryType: content === undefined ? state.categoryType : categoryType,
        isEdit,
        id,
      };
    case SET_ISEDIT:
      return {
        ...state,
        isEdit: action.isEdit,
        id: action.id,
      };
    case SET_CATEGORY_TYPE:
      return {
        ...state,
        categoryType: action.categoryType,
      };
    default:
      return state;
  }
};

export default history;
