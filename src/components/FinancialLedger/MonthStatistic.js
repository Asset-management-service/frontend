import { useState } from 'react';
import { useQuery } from 'react-query';
import ComparisonModal from './ComparisonModal';
import BarGraph from '../common/BarGraph';
import { getMonthStatistic } from '../../lib/api/statistic';
import { makeExpData, makeRevData } from '../../lib/utils';
import { BAR_COLORS } from '../../constants';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { StatisticWrapper, StyledButton } from './StatisticStyled';

function MonthStatistic() {
  const [show, setShow] = useState(false);
  const [calender, setCalender] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return {
      year,
      month,
      dateQuery: `${year}-${String(month).padStart(2, '0')}`,
    };
  });
  const [newData, setNewData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [revData, setRevData] = useState([]);
  const { year, month, dateQuery } = calender;
  const { status } = useQuery(
    ['getMonthStatistic', year, month],
    () => getMonthStatistic(`${year}-${String(month).padStart(2, '0')}`),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        makeData(data);
      },
    },
  );
  const { data, status: statusDetail } = useQuery(
    ['getMonthStatisticDetail', dateQuery],
    () => getMonthStatistic(dateQuery, true),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        setExpData(
          makeExpData(
            data.variableCostResponses,
            data.fixedCostResponses,
            data.totalExp,
            data.totalFixed,
            data.totalVariable,
          ),
        );
        setRevData(makeRevData(data.revenueResponses, data.totalRevenue));
      },
    },
  );
  const onOpen = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  const onClick = (value) => {
    setCalender({
      ...calender,
      dateQuery: value.data.dateQuery,
    });
  };
  const movePrev = () => {
    const newCalender = new Date(year, month - 6);
    setCalender({
      ...calender,
      year: newCalender.getFullYear(),
      month: newCalender.getMonth() + 1,
    });
  };
  const moveNext = () => {
    const newCalender = new Date(year, month + 4);
    setCalender({
      ...calender,
      year: newCalender.getFullYear(),
      month: newCalender.getMonth() + 1,
    });
  };
  const makeData = (data) => {
    const newData = data.map((item) => ({
      지출금액: item.cost,
      수익금액: item.revenue,
      index: `${item.year} ${item.month}월`,
      dateQuery: `${item.year}-${String(item.month).padStart(2, '0')}`,
    }));
    setNewData(newData.reverse());
  };
  return (
    <div>
      <StatisticWrapper status={status}>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <>
            <button onClick={movePrev} className="prevBtn">
              <ChevronLeftRoundedIcon />
            </button>
            <BarGraph
              data={newData}
              keys={['지출금액', '수익금액']}
              index={['index']}
              onClick={onClick}
              layout="vertical"
              borderRadius={10}
              colors={['#FFC1C0', '#C6DCF5']}
              groupMode="grouped"
            />
            <button onClick={moveNext} className="nextBtn">
              <ChevronRightRoundedIcon />
            </button>
          </>
        )}
      </StatisticWrapper>
      <StatisticWrapper status={statusDetail}>
        {statusDetail === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="heading">
              <h1>
                {dateQuery.split('-')[0]}년 {Number(dateQuery.split('-')[1])}월
              </h1>
              <StyledButton basiccolor="black" outlined="true" onClick={onOpen}>
                지난 달과 비교하기
              </StyledButton>
            </div>
            {data.mostExpCategory && (
              <p>
                <span className="red">{data.mostExpCategory}</span>에 가장 많은
                돈을 지출하셨습니다
              </p>
            )}
            {data.leastExpCategory && (
              <p>
                <span className="red">{data.leastExpCategory}</span>에 가장 적은
                돈을 지출하셨습니다
              </p>
            )}
            {data.fixedExceed && (
              <p>⚠️ 고정비 비율이 설정한 비율을 초과하였습니다. </p>
            )}
            {data.variableExceed && (
              <p>⚠️ 변동비 비율이 설정한 비율을 초과하였습니다. </p>
            )}
            <BarGraph
              data={expData}
              keys={['지출금액', '고정비', '변동비', '총 지출']}
              index={['index']}
              layout="horizontal"
              valueFormat={(value) =>
                `${Number(value).toLocaleString()}(${Math.floor(
                  (value / data.totalExp) * 100,
                )}%)`
              }
              colors={(bar) => BAR_COLORS[bar.id]}
              height={
                (data.fixedCostResponses.length +
                  data.variableCostResponses.length) *
                  50 +
                300
              }
            />
            <BarGraph
              data={revData}
              keys={['수익금액', '총 수익']}
              index={['index']}
              layout="horizontal"
              valueFormat={(value) =>
                `${Number(value).toLocaleString()}(${Math.floor(
                  (value / data.totalRevenue) * 100,
                )}%)`
              }
              colors={(bar) => BAR_COLORS[bar.id]}
              height={data.revenueResponses.length * 50 + 200}
            />
          </>
        )}
        {show && (
          <ComparisonModal
            onClose={onClose}
            type="month"
            dateQuery={dateQuery}
          />
        )}
      </StatisticWrapper>
    </div>
  );
}

export default MonthStatistic;
