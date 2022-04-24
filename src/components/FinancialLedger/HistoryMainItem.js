import { useDispatch } from 'react-redux';
import { setHistory, setIsEdit } from '../../modules/history';
import { selectDate } from '../../modules/calender';
import styled from 'styled-components';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const HistoryItem = styled.li`
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0;
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
  margin-bottom: 1rem;
`;

const ItemRow = styled.div`
  display: grid;
  padding: 0.5rem 0;
  grid-template-columns: 4fr 2fr 2fr;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  position: relative;
  .editBtn {
    position: absolute;
    transition: all 0.2s ease-in-out;
    width: 0;
    height: 0;
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    svg {
      transition: all 0.2s ease-in-out;
      width: 0;
      height: 0;
    }
  }
  &:hover {
    background-color: #f9f9f9;
    .editBtn {
      width: 25px;
      height: 25px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  div {
    display: flex;
  }
  p {
    text-align: center;
    &.content {
      text-align: left;
    }
    &.price {
      text-align: right;
      margin-right: 2rem;
    }
    &.payment {
      color: #626262;
    }
    &.category {
      margin: 0 3rem 0 2rem;
    }
  }
`;

function HistoryMainItem({ history }) {
  const dispatch = useDispatch();
  const onEdit = () => {
    dispatch(
      setHistory({
        type: 'expenditure',
        price: '26000',
        payment: '신용카드',
        content: '키보드 주문',
        category: '쇼핑',
      }),
    );
    dispatch(selectDate(2022 + 4 + 12 - 1, 12, 2022, 4 - 1));
    dispatch(setIsEdit(true));
  };
  return (
    <HistoryItem>
      <ItemHeading>
        <p className="date">2022년 4월 13일</p>
        <p>
          <span className="plus">+ 1,380,000</span>
          <span className="minus"> - 26,000</span>
          <span> = </span>
          <span className="plus">+ 1,354,000</span>
        </p>
      </ItemHeading>
      <ItemRow>
        <div>
          <p className="minus category">쇼핑</p>
          <p className="content">키보드 주문</p>
        </div>
        <p className="payment">신용카드</p>
        <p className="minus price">- 20,000</p>
        <button className="editBtn" onClick={onEdit}>
          <ModeEditOutlineOutlinedIcon />
        </button>
      </ItemRow>
      <ItemRow>
        <div>
          <p className="minus category">식비</p>
          <p className="content">버거킹 점심식사</p>
        </div>
        <p className="payment">체크카드</p>
        <p className="minus price">- 6,000</p>
        <button className="editBtn">
          <ModeEditOutlineOutlinedIcon />
        </button>
      </ItemRow>
      <ItemRow>
        <div>
          <p className="plus category">월급</p>
          <p className="content">우아한 테크캠프 월급</p>
        </div>
        <p className="payment"></p>
        <p className="plus price">+ 1,380,000</p>
        <button className="editBtn">
          <ModeEditOutlineOutlinedIcon />
        </button>
      </ItemRow>
    </HistoryItem>
  );
}

export default HistoryMainItem;
