import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import ComparisonModal from './ComparisonModal';
import BarGraph from '../common/BarGraph';
import { getYearStatistic } from '../../lib/api/statistic';
import { makeExpData, makeRevData } from '../../lib/utils';
import { BAR_COLORS } from '../../constants';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ShareIcon from '@mui/icons-material/Share';
import { StatisticWrapper, StyledButton } from './StatisticStyled';

function YearStatistic({ onShare }) {
  const [show, setShow] = useState(false);
  const [calender, setCalender] = useState({
    year: new Date().getFullYear(),
    dateQuery: `${new Date().getFullYear()}`,
  });
  const [newData, setNewData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [revData, setRevData] = useState([]);
  const { year, dateQuery } = calender;
  const { status } = useQuery(
    ['getYearStatistic', year],
    () => getYearStatistic(`${year}`),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        makeData(data);
      },
    },
  );
  const { data, status: statusDetail } = useQuery(
    ['getYearStatisticDetail', dateQuery],
    () => getYearStatistic(dateQuery, true),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(data);
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
    setCalender({
      ...calender,
      year: year - 5,
    });
  };
  const moveNext = () => {
    setCalender({
      ...calender,
      year: year + 5,
    });
  };
  const makeData = (data) => {
    const newData = data.map((item) => ({
      지출금액: item.cost,
      수익금액: item.revenue,
      index: `${item.year}년`,
      dateQuery: `${item.year}`,
    }));
    setNewData(newData.reverse());
  };
  useEffect(() => {
    return () => setShow(false);
  }, []);
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
              id="yearBarGraph1"
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
              <h1>{dateQuery.split('-')[0]}년</h1>
              <StyledButton basiccolor="black" outlined="true" onClick={onOpen}>
                작년과 비교하기
              </StyledButton>
              <button
                className="shareBtn"
                onClick={() => onShare('yearBarGraph2')}
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
            <div id="yearBarGraph2">
              <BarGraph
                data={expData}
                keys={['지출금액', '고정비', '변동비', '총 지출']}
                index={['index']}
                layout="horizontal"
                valueFormat={(value) =>
                  `${Number(value).toLocaleString()}(${Math.round(
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
            </div>
          </>
        )}
        {show && (
          <ComparisonModal
            onClose={onClose}
            type="year"
            dateQuery={dateQuery}
          />
        )}
      </StatisticWrapper>
    </div>
  );
}

export default YearStatistic;
