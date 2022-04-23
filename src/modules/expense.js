//비율 설정 상태 관리
const FIX_RATIO_INPUT = 'expense/FIX_RATIO_INPUT';
const CHANGE_RATIO_INPUT = 'expense/CHANGE_RATIO_INPUT';

//비율 설정 액션 생성 함수 만들기
export const fixRatioInput = () => ({
     type: FIX_RATIO_INPUT,
     input,
});

export const changeRatioInput = () => ({
     type: CHANGE_RATIO_INPUT,
     input,
});

const initialState = {
    input: '',
};

//리듀서 함수 생성
function expense(state = initialState, action) {
  switch (action.type) {
      case FIX_RATIO_INPUT:
          return {
              ...state,
              input:action.input,
            };
    case CHANGE_RATIO_INPUT:
          return {
              ...state,
              input:action.input,
            };

    default:
      return state;
  }
}

export default expense;