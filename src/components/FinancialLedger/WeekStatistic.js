import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BarGraph from '../common/BarGraph';
import { getWeekStatistic } from '../../lib/api/statistic';
import { WEEK_WORDS } from '../../constants';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ShareIcon from '@mui/icons-material/Share';
import { StatisticWrapper, GraphWrapper } from './StatisticStyled';

function WeekStatistic({ onShare }) {
  const [calender, setCalender] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    let date = today.getDate() - today.getDay();
    if (date === 0) date = date - 6;
    else date = date - 1;
    const value = new Date(year, month, date);
    return {
      year: value.getFullYear(),
      month: value.getMonth(),
      date: value.getDate(),
      dateQuery: `${value.getFullYear()}-${String(
        value.getMonth() + 1,
      ).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`,
      dayOfWeek: null,
    };
  });
  const [newData, setNewData] = useState([]);
  const [newDetailData, setNewDetailData] = useState([]);
  const { year, month, date, dateQuery, dayOfWeek } = calender;
  const { status } = useQuery(
    ['getWeekStatistic', year, month, date],
    () =>
      getWeekStatistic(
        `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(
          2,
          '0',
        )}`,
      ),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        makeData(data);
      },
    },
  );
  const { data, status: statusDetail } = useQuery(
    ['getWeekStatisticDetail', dateQuery],
    () => getWeekStatistic(dateQuery, true),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        makeNewData(data.costResponses, data.totalExp);
      },
    },
  );
  const onClick = (value) => {
    setCalender({
      ...calender,
      dateQuery: value.data.dateQuery,
      dayOfWeek: value.data.dayOfWeek,
    });
  };
  const movePrev = () => {
    const newCalender = new Date(year, month, date - 56);
    setCalender({
      ...calender,
      year: newCalender.getFullYear(),
      month: newCalender.getMonth(),
      date: newCalender.getDate(),
    });
  };
  const moveNext = () => {
    const newCalender = new Date(year, month, date + 56);
    setCalender({
      ...calender,
      year: newCalender.getFullYear(),
      month: newCalender.getMonth(),
      date: newCalender.getDate(),
    });
  };
  const makeData = (data) => {
    if (!data) return;
    if (data.length == 0) return [];
    const newData = data.map((item) => ({
      지출금액: item.cost,
      index: `${item.month}월 ${WEEK_WORDS[item.dayOfWeek - 1]}째주 (${
        item.year
      })`,
      dateQuery: item.weekStart,
      dayOfWeek: item.dayOfWeek,
    }));
    setNewData(newData.reverse());
  };

  const makeNewData = (data, total) => {
    if (!data) return;
    if (data.length == 0) return [];
    const newData = data.map((item) => ({
      지출금액: item.cost,
      index: item.categoryName,
    }));
    setNewDetailData(
      newData.reverse().concat({
        지출금액: total,
        index: '총 지출',
      }),
    );
  };
  useEffect(() => {
    getWeekStatistic(calender.dateQuery).then((data) => {
      setCalender({
        ...calender,
        dayOfWeek: data[0].dayOfWeek,
      });
    });
  }, []);
  return (
    <div>
      <StatisticWrapper status={status}>
        <button onClick={movePrev} className="prevBtn">
          <ChevronLeftRoundedIcon />
        </button>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <GraphWrapper>
            <BarGraph
              data={newData}
              keys={['지출금액']}
              index={['index']}
              onClick={onClick}
              layout="vertical"
              borderRadius={10}
              colors={['#FFC1C0']}
              minWidth="true"
              id="weekBarGraph1"
            />
          </GraphWrapper>
        )}

        <button onClick={moveNext} className="nextBtn">
          <ChevronRightRoundedIcon />
        </button>
      </StatisticWrapper>
      <StatisticWrapper status={statusDetail}>
        {statusDetail === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="heading">
              <h1>
                {dateQuery.split('-')[0]}년 {Number(dateQuery.split('-')[1])}월{' '}
                {WEEK_WORDS[dayOfWeek - 1]}
                째주
              </h1>
              <button
                className="shareBtn"
                onClick={() => onShare('weekBarGraph2')}
              >
                <ShareIcon />
              </button>
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

            <BarGraph
              data={newDetailData}
              keys={['지출금액']}
              index={['index']}
              layout="horizontal"
              valueFormat={(value) =>
                `${Number(value).toLocaleString()}(${Math.round(
                  (value / data.totalExp) * 100,
                )}%)`
              }
              colors={['#FFA5A3']}
              height={data.costResponses.length * 50 + 200}
              id="weekBarGraph2"
            />
          </>
        )}
      </StatisticWrapper>
    </div>
  );
}

export default WeekStatistic;
