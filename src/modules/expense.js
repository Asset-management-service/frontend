//비율 설정 상태 관리
const SET_EXPENSE_RATIO = 'expense/SET_EXPENSE_RATIO';
const CHANGE_EXPENSE_RATIO = 'expense/CHANGE_EXPENSE_RATIO';
const INITIALIZE_RATIO_INPUT = 'expense/INITIALIZE_RATIO_INPUT';

//비율 설정 액션 생성 함수 만들기
export const setExpenseRatio = (fixRatio, variableRatio) => ({
  type: SET_EXPENSE_RATIO,
  fixRatio,
  variableRatio,
});

export const changeExpenseRatio = (expenseType, ratio) => ({
  type: CHANGE_EXPENSE_RATIO,
  expenseType,
  ratio,
});

export const initializeRatioInput = () => ({
  type: INITIALIZE_RATIO_INPUT,
});

const initialState = {
  fixRatio: null,
  variableRatio: null,
  input: {
    fixRatio: '',
    variableRatio: '',
  },
};

//리듀서 함수 생성
function expense(state = initialState, action) {
  switch (action.type) {
    case SET_EXPENSE_RATIO:
      return {
        fixRatio: action.fixRatio,
        variableRatio: action.variableRatio,
      };
    case CHANGE_EXPENSE_RATIO:
      return {
        ...state,
        input: {
          ...state.input,
          [action.expenseType]: action.ratio,
        },
      };
    case INITIALIZE_RATIO_INPUT:
      return {
        ...state,
        input: {
          fixRatio: '',
          variableRatio: '',
        },
      };
    default:
      return state;
  }
}

export default expense;
