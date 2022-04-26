import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HistoryMain from '../components/FinancialLedger/HistoryMain';
import { moveNextMonth, movePrevMonth } from '../modules/calender';
import { setBudget } from '../modules/budget';
import { getHistory } from '../lib/api/history';

function HistoryMainContainer() {
  const { year, month } = useSelector(({ calender }) => calender);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, isError, remove } = useQuery(
    ['getHistory', year, month],
    () => getHistory(year, month),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        navigate('/financial/setting');
      },
      onSuccess: (data) => {
        dispatch(setBudget(data.remainingBudget));
      },
    },
  );
  useEffect(() => {
    if (isError) {
      navigate('/financial/setting');
    }
  }, [isError]);

  useEffect(() => {
    return () => remove();
  }, []);

  const showNextMonth = () => dispatch(moveNextMonth());
  const showPrevMonth = () => dispatch(movePrevMonth());
  // GET api 호출 (날짜별 수익 및 지출 내역)
  return (
    <HistoryMain
      onMoveNext={showNextMonth}
      onMovePrev={showPrevMonth}
      year={year}
      month={month}
      data={data}
      status={status}
    />
  );
}

export default HistoryMainContainer;
