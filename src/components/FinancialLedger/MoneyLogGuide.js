import { useSelector } from 'react-redux';
import styled from 'styled-components';

const GuideWrapper = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-grow: 1;
  margin: 3rem 10px 0;
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
  const { month, date } = useSelector(({ calender }) => calender.selected);
  // 단건 조회 api
  return (
    <GuideWrapper>
      <h2>
        {month + 1}월 {date}일
      </h2>
      <ul>
        <GuideRow>
          <div className="explanation">
            <span>생활비</span>
            <span>돌돌이 리필</span>
          </div>
          <div className="price minus">-2,000</div>
        </GuideRow>
        <GuideRow>
          <div className="explanation">
            <span>식비</span>
            <span>부대찌개</span>
          </div>
          <div className="price minus">-10,000</div>
        </GuideRow>
        <GuideRow>
          <div className="explanation">
            <span>용돈</span>
            <span>생활비 용돈</span>
          </div>
          <div className="price plus">+500,000</div>
        </GuideRow>
      </ul>
      <div>
        <GuideRow className="summary">
          <p>총 수익</p>
          <p className="price plus">+500,000</p>
        </GuideRow>
        <GuideRow className="summary">
          <p>총 지출</p>
          <p className="price minus">-12,000</p>
        </GuideRow>
      </div>
      <GuideRow className="summary totalPrice">
        <p>총계</p>
        <p className="price plus">+488,000</p>
      </GuideRow>
    </GuideWrapper>
  );
}
export default MoneyLogGuide;
