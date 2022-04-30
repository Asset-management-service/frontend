import Loading from '../common/Loading';
import HistoryMainList from './HistoryMainList';
import styled from 'styled-components';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const HistoryMainWrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  font-size: 17px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
  .History-noContent {
    flex-grow: 1;
    font-size: 20px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 5rem;
    }
  }
`;

const HistoryMainHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  .Heading-column {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 25px;
    margin-right: 1rem;
  }
  svg {
    font-size: 30px;
    margin-top: 0.4rem;
  }
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SummaryBox = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  margin-left: 1rem;
  border: 2px solid black;
  &.plus {
    border-color: #42a5f5;
    color: #1e88e5;
  }
  &.minus {
    border-color: #fd5959;
    color: #ff0000;
  }
  @media screen and (max-width: 1400px) {
    margin: 1rem 1rem 0 0;
  }
`;
function HistoryMain({
  year,
  month,
  onMoveNext,
  onMovePrev,
  status,
  history,
  data,
}) {
  return (
    <HistoryMainWrapper>
      {status === 'loading' ? (
        <Loading mainColor="black" />
      ) : (
        <>
          <HistoryMainHeading>
            <div className="Heading-column">
              <h2>
                {year}년 {month + 1}월
              </h2>
              <div>
                <button onClick={onMovePrev}>
                  <ChevronLeftRoundedIcon />
                </button>
                <button onClick={onMoveNext}>
                  <ChevronRightRoundedIcon />
                </button>
              </div>
            </div>
            <div className="Heading-column">
              <SummaryBox>
                예산 {data.remainingBudget.toLocaleString()}원
              </SummaryBox>
              <SummaryBox className="plus">
                수익 {data.totalRevenue.toLocaleString()}원
              </SummaryBox>
              <SummaryBox className="minus">
                지출 {data.totalExpenditure.toLocaleString()}원
              </SummaryBox>
            </div>
          </HistoryMainHeading>
          {data.revenueExpenditureResponses.content.length == 0 ? (
            <div className="History-noContent">
              <p>수익 지출 내역이 없습니다</p>
            </div>
          ) : (
            history && (
              <ul>
                {history.map(
                  (item, index) =>
                    item.length !== 0 && (
                      <HistoryMainList key={index} history={item} />
                    ),
                )}
              </ul>
            )
          )}
        </>
      )}
    </HistoryMainWrapper>
  );
}

export default HistoryMain;
