const SET_HISTORY = 'history/SET_HISTORY';
const CHANGE_INPUT = 'history/CHANGE_INPUT';
const SET_ISEDIT = 'history/SET_ISEDIT';

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

const initialState = {
  type: 'income',
  payment: '',
  category: '',
  price: '',
  content: '',
  isEdit: false,
  id: null,
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_HISTORY:
      const { type, payment, category, price, content, isEdit, id } =
        action.value;
      return {
        ...state,
        type: type === undefined ? state.type : type,
        payment: payment === undefined ? state.payment : payment,
        category: category === undefined ? state.category : category,
        price: price === undefined ? state.price : price,
        content: content === undefined ? state.content : content,
        isEdit,
        id,
      };
    case SET_ISEDIT:
      return {
        ...state,
        isEdit: action.isEdit,
        id: action.id,
      };
    default:
      return state;
  }
};

export default history;
