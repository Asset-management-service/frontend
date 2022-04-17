import { useDispatch, useSelector } from 'react-redux';
import HistoryMain from '../components/FinancialLedger/HistoryMain';
import { moveNextMonth, movePrevMonth } from '../modules/calender';

function HistoryMainContainer() {
  const { year, month } = useSelector(({ calender }) => calender);
  const dispatch = useDispatch();
  const showNextMonth = () => dispatch(moveNextMonth());
  const showPrevMonth = () => dispatch(movePrevMonth());
  // GET api 호출 (날짜별 수익 및 지출 내역)
  return (
    <HistoryMain
      onMoveNext={showNextMonth}
      onMovePrev={showPrevMonth}
      year={year}
      month={month}
    />
  );
}

export default HistoryMainContainer;
