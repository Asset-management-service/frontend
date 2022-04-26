import { useEffect, useState } from 'react';
import HistoryMainItem from './HistoryMainItem';
import styled from 'styled-components';

const HistoryItem = styled.li`
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
  .plus {
    color: #1e88e5;
  }
  .minus {
    color: #ef5350;
  }
`;

const ItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

function HistoryMainList({ history }) {
  const [total, setTotal] = useState({
    plus: 0,
    minus: 0,
    total: 0,
  });
  const dateSplit = history[0].date.split('-');

  const calcTotal = () => {
    let plus = 0;
    let minus = 0;
    history.forEach((item) => {
      if (item.revenueExpenditureType === 'REVENUE') plus += item.cost;
      else minus += item.cost;
    });
    setTotal({
      plus,
      minus,
      total: plus - minus,
    });
  };
  useEffect(() => calcTotal(), [history]);
  return (
    <HistoryItem>
      <ItemHeading>
        <p className="date">
          {dateSplit[0]}년 {Number(dateSplit[1])}월 {Number(dateSplit[2])}일
        </p>
        <p>
          <span className="plus">+ ₩ {total.plus.toLocaleString()}</span>
          <span className="minus"> - ₩ {total.minus.toLocaleString()}</span>
          <span> = </span>
          <span
            className={
              total.total !== 0
                ? total.total > 0
                  ? 'plus'
                  : 'minus'
                : undefined
            }
          >
            {total.total !== 0 && (total.total > 0 ? '+' : '-')} ₩{' '}
            {Math.abs(total.total).toLocaleString()}
          </span>
        </p>
      </ItemHeading>
      {history.map((item) => (
        <HistoryMainItem
          item={item}
          key={item.revenueExpenditureId}
          year={Number(dateSplit[0])}
          month={Number(dateSplit[1])}
          date={Number(dateSplit[2])}
        />
      ))}
    </HistoryItem>
  );
}

export default HistoryMainList;
