import { useSelector } from 'react-redux';
import HistoryMainItem from './HistoryMainItem';
import styled from 'styled-components';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const HistoryMainWrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  font-size: 17px;
  padding: 2rem;
  .budgetPrice {
    font-weight: bold;
  }
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
`;

const HistoryMainHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
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
`;

const SummaryBox = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  margin-left: 1rem;
  &.plus {
    border: 2px solid #42a5f5;
    color: #1e88e5;
  }
  &.minus {
    border: 2px solid #fd5959;
    color: #ff0000;
  }
`;
function HistoryMain({ year, month, onMoveNext, onMovePrev }) {
  return (
    <HistoryMainWrapper>
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
          <SummaryBox className="plus">수익 0원</SummaryBox>
          <SummaryBox className="minus">지출 0원</SummaryBox>
        </div>
      </HistoryMainHeading>
      <p>
        💸 이번달 남은 예산 : <span className="budgetPrice">+ 100,000,000</span>
      </p>
      <ul>
        <HistoryMainItem />
        <HistoryMainItem />
      </ul>
    </HistoryMainWrapper>
  );
}

export default HistoryMain;
