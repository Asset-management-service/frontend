//비율 설정 상태 관리
const FIX_RATIO_INPUT = 'expense/FIX_RATIO_INPUT';
const CHANGE_RATIO_INPUT = 'expense/CHANGE_RATIO_INPUT';
const CHANGE_MODAL = 'expense/CHANGE_MODAL';

//비율 설정 액션 생성 함수 만들기
export const fixRatioInput = (fixRatio) => ({
     type: FIX_RATIO_INPUT,
     fixRatio,
});

export const changeRatioInput = (changeRatio) => ({
     type: CHANGE_RATIO_INPUT,
     changeRatio,
});

export const changeModal = (isOpen) => ({
     type: CHANGE_MODAL,
     isOpen,
});


const initialState = {
    fixRatio: '',
    changeRatio:' ',
    isOpen: false,
};

//리듀서 함수 생성
function expense(state = initialState, action) {
  switch (action.type) {
      case FIX_RATIO_INPUT:
          return {
              ...state,
              fixRatio:action.fixRatio,
            };
    case CHANGE_RATIO_INPUT:
          return {
              ...state,
              changeRatio:action.changeRatio,
            };

    case CHANGE_MODAL:
          return {
              ...state,
              isOpen:action.isOpen,
            };


    default:
      return state;
  }
}

export default expense;