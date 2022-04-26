//예산 설정 상태 관리
const CHANGE_BUDGET_INPUT = 'budget/CHANGE_BUDGET_INPUT';
const SET_BUDGET = 'budget/SET_BUDGET';

//예산 설정 액션 생성 함수 만들기
export const changeBudgetInput = (input) => ({
  type: CHANGE_BUDGET_INPUT,
  input,
});

export const setBudget = (budget) => ({
  type: SET_BUDGET,
  budget,
});

const initialState = {
  budgetAmount: null,
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
    case SET_BUDGET:
      return {
        input: '',
        budgetAmount: action.budget,
      };
    default:
      return state;
  }
}

export default budget;
