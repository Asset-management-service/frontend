//예산 설정 상태 관리
const CHANGE_BUDGET_INPUT = 'budget/CHANGE_BUDGET_INPUT';
const SET_BUDGET_INPUT = 'budget/SET_BUDGET_INPUT';

//예산 설정 액션 생성 함수 만들기
export const changeBudgetInput = (input) => ({
  type: CHANGE_BUDGET_INPUT,
  input,
});

export const setBudgetInput = () => ({
  type: SET_BUDGET_INPUT,
});

const initialState = {
  budgetAmount: '',
  input: '',
};

//리듀서 함수 생성
function budget(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUDGET_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case SET_BUDGET_INPUT:
      return {
        input: '',
        budgetAmount: state.input,
      };
    default:
      return state;
  }
}

export default budget;
