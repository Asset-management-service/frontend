import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calender } from '../components/common/Calender';
import {
  initialize,
  moveNextMonth,
  selectDate,
  movePrevMonth,
  changeYear,
  changeMonth,
} from '../modules/calender';
function CalenderContainer({ noChevron, noComboBox }) {
  const dispatch = useDispatch();
  const calender = useSelector(({ calender }) => calender);
  const onSelect = (id, date, year, month) => {
    dispatch(selectDate(id, date, year, month));
  };
  const onMoveNext = () => {
    dispatch(moveNextMonth());
  };
  const onMovePrev = () => {
    dispatch(movePrevMonth());
  };
  const onChangeYear = (year) => {
    dispatch(changeYear(year));
    dispatch(initialize());
  };
  const onChangeMonth = (month) => {
    dispatch(changeMonth(month));
    dispatch(initialize());
  };
  useEffect(() => console.log(calender), [calender]);
  return (
    <Calender
      onSelect={onSelect}
      calender={calender}
      onMoveNext={onMoveNext}
      onMovePrev={onMovePrev}
      onChangeYear={onChangeYear}
      onChangeMonth={onChangeMonth}
      noChevron={noChevron}
      noComboBox={noComboBox}
    />
  );
}

export default CalenderContainer;
