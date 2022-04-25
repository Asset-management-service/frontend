//예산 설정 상태 관리
const BUDGET_INPUT = 'budget/BUDGET_INPUT';

//예산 설정 액션 생성 함수 만들기
export const budgetInput = (budget) => ({
     type:BUDGET_INPUT,
     budget,
});

const initialState = {
    budget: '',
};

//리듀서 함수 생성
function budget(state = initialState, action) {
  switch (action.type) {
      case BUDGET_INPUT:
          return {
              ...state,
              budget:action.budget,
            };
    default:
      return state;
  }
}

export default budget;