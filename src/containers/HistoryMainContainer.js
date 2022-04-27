import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HistoryMain from '../components/FinancialLedger/HistoryMain';
import { moveNextMonth, movePrevMonth } from '../modules/calender';
import { getHistory } from '../lib/api/history';

function HistoryMainContainer() {
  const { year, month } = useSelector(({ calender }) => calender);
  const [history, setHistory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, isError, remove } = useQuery(
    ['getHistory', year, month],
    () => getHistory(year, month + 1),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        navigate('/financial/setting', {
          state: '한달 예산 금액을 설정해주세요',
        });
      },
    },
  );
  useEffect(() => {
    if (!localStorage.getItem('BUDGET') || status === 'error') {
      navigate('/financial/setting', {
        state: '한달 예산 금액을 설정해주세요',
      });
    }
  }, [isError]);

  useEffect(() => {
    return () => remove();
  }, []);

  useEffect(() => {
    if (data) {
      let newHistory = new Array();
      for (let i = 0; i < 31; i++) {
        newHistory[i] = new Array();
      }
      data.revenueExpenditureResponses.content.forEach((item) => {
        const dateSplit = item.date.split('-');
        newHistory[31 - Number(dateSplit[2]) - 1].push(item);
      });
      setHistory(newHistory);
    }
  }, [data]);

  const showNextMonth = () => dispatch(moveNextMonth());
  const showPrevMonth = () => dispatch(movePrevMonth());
  // GET api 호출 (날짜별 수익 및 지출 내역)
  return (
    <HistoryMain
      onMoveNext={showNextMonth}
      onMovePrev={showPrevMonth}
      year={year}
      month={month}
      history={history}
      data={data}
      status={status}
    />
  );
}

export default HistoryMainContainer;
