const INITIALIZE = 'calender/INITIALIZE';
const SELECT = 'calender/SELECT';
const MOVE_NEXT_MONTH = 'calender/MOVE_NEXT_MONTH';
const MOVE_PREV_MONTH = 'calender/MOVE_PREV_MONTH';
const CHANGE_YEAR = 'calender/CHANGE_YEAR';
const CHANGE_MONTH = 'calender/CHANGE_MONTH';

export const initialize = () => ({
  type: INITIALIZE,
});

export const selectDate = (id, date, year, month) => ({
  type: SELECT,
  id,
  date,
  year,
  month,
});

export const moveNextMonth = () => ({
  type: MOVE_NEXT_MONTH,
});

export const movePrevMonth = () => ({
  type: MOVE_PREV_MONTH,
});

export const changeYear = (year) => ({
  type: CHANGE_YEAR,
  year,
});

export const changeMonth = (month) => ({
  type: CHANGE_MONTH,
  month,
});

const initialState = {
  year: null,
  month: null,
  selected: {
    year: null,
    month: null,
    date: null,
    id: null,
  },
};

const calender = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        selected: {
          ...state.selected,
          id: null,
        },
      };
    case SELECT:
      return {
        ...state,
        selected: {
          year: action.year,
          month: action.month,
          date: action.date,
          id: action.id,
        },
      };
    case MOVE_NEXT_MONTH:
      return {
        ...state,
        year: state.month === 11 ? state.year + 1 : state.year,
        month: state.month == 11 ? 0 : state.month + 1,
        selected: {
          ...state.selected,
          id: null,
        },
      };
    case MOVE_PREV_MONTH:
      return {
        ...state,
        year: state.month === 0 ? state.year - 1 : state.year,
        month: state.month === 0 ? 11 : state.month - 1,
        selected: {
          ...state.selected,
          id: null,
        },
      };
    case CHANGE_YEAR:
      return {
        ...state,
        year: action.year,
      };
    case CHANGE_MONTH:
      return {
        ...state,
        month: action.month,
      };
    default:
      return state;
  }
};

export default calender;
