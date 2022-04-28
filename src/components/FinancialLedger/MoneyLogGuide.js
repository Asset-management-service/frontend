import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getRevenueExpenditure } from '../../lib/api/moneylog';

const GuideWrapper = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-grow: 1;
  margin: 3rem 10px 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  .totalPrice {
    margin: 0.5rem 0 0;
    border-top: 1px solid lightgray;
    border-radius: 0;
  }
  .minus {
    color: #ef5350;
  }
  .plus {
    color: #1e88e5;
  }
  .guideText {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }
`;

const GuideRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f7;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  .explanation {
    display: flex;
    flex-direction: column;
    span:first-child {
      font-size: 13px;
      color: #9fabaf;
      margin-bottom: 5px;
    }
  }
  .price {
    font-weight: bold;
  }
  &.summary {
    background-color: #fff;
    margin-bottom: 0rem;
    padding: 0.3rem;
  }
`;

function MoneyLogGuide() {
  const { year, month, date } = useSelector(
    ({ calender }) => calender.selected,
  );
  // 단건 조회 api
  const { data, status } = useQuery(
    ['getRevenueExpenditure', year, month, date],
    () => getRevenueExpenditure(year, month + 1, date),
    {
      refetchOnWindowFocus: false,
    },
  );
  return (
    <GuideWrapper>
      <h2>
        {month + 1}월 {date}일
      </h2>
      {status === 'loading' ? (
        <p className="guideText">Loading...</p>
      ) : data.revenueExpenditureResponses.length === 0 ? (
        <p className="guideText">수익 지출 내역이 없습니다</p>
      ) : (
        <>
          <ul>
            {data.revenueExpenditureResponses.map((item) => (
              <GuideRow key={item.revenueExpenditureId}>
                <div className="explanation">
                  <span>{item.categoryName}</span>
                  <span>{item.content}</span>
                </div>
                <div
                  className={
                    item.revenueExpenditureType === 'REVENUE'
                      ? 'price plus'
                      : 'price minus'
                  }
                >
                  {item.revenueExpenditureType === 'REVENUE' ? '+' : '-'}
                  {item.cost}
                </div>
              </GuideRow>
            ))}
          </ul>
          <div>
            <GuideRow className="summary">
              <p>총 수익</p>
              <p className="price plus">+{data.totalRevenue}</p>
            </GuideRow>
            <GuideRow className="summary">
              <p>총 지출</p>
              <p className="price minus">-{data.totalExpenditure}</p>
            </GuideRow>
          </div>
          <GuideRow className="summary totalPrice">
            <p>총계</p>
            <p
              className={
                data.totalRevenueExpenditure == 0
                  ? 'price'
                  : data.totalRevenueExpenditure > 0
                  ? 'plus price'
                  : 'minus price'
              }
            >
              {data.totalRevenueExpenditure}
            </p>
          </GuideRow>
        </>
      )}
    </GuideWrapper>
  );
}
export default MoneyLogGuide;
