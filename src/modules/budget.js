//예산 설정 상태 관리
const BUDGET_INPUT = 'budget/BUDGET_INPUT';
const CHANGE_BUDGET_MODAL = 'budget/CHANGE_BUDGET_MODAL';

//예산 설정 액션 생성 함수 만들기
export const budgetInput = (budget) => ({
     type:BUDGET_INPUT,
     budget,
});

export const changeBudgetModal = (isOpen) => ({
     type: CHANGE_BUDGET_MODAL,
     isOpen,
});

const initialState = {
    budget: '',
    isOpen: false,
};

//리듀서 함수 생성
function budget(state = initialState, action) {
  switch (action.type) {
      case BUDGET_INPUT:
          return {
              ...state,
              budget:action.budget,
            };
      case CHANGE_BUDGET_MODAL:
          return {
              ...state,
              isOpen:action.isOpen,
            };
    default:
      return state;
  }
}

export default budget;