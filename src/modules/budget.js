//예산 설정 상태 관리
const SETMONTHLY_INPUT = 'budget/SETMONTHLY_INPUT';

//예산 설정 액션 생성 함수 만들기
export const setMonthlyInput = (input) => ({
     type:SETMONTHLY_INPUT,
     input,
});

const initialState = {
    input: '',
};

//리듀서 함수 생성
function budget(state = initialState, action) {
  switch (action.type) {
      case SETMONTHLY_INPUT:
          return {
              ...state,
              input:action.input,
            };
    default:
      return state;
  }
}

export default budget;