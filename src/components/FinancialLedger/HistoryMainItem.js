import { useDispatch } from 'react-redux';
import { setHistory, setIsEdit } from '../../modules/history';
import { selectDate } from '../../modules/calender';
import styled from 'styled-components';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const ItemRow = styled.div`
  display: grid;
  padding: 0.5rem 1.5rem;
  grid-template-columns: 4fr 2fr 2fr;
  align-items: center;
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
    align-items: center;
  }
  p {
    text-align: center;
    &.content {
      text-align: left;
    }
    &.price {
      text-align: right;
      margin-right: 2rem;
      font-weight: bold;
    }
    &.payment {
      opacity: 0.6;
    }
    &.category {
      margin-right: 3rem;
      text-align: center;
      width: 120px;
    }
  }
`;

function HistoryMainItem({ item, year, month, date }) {
  const dispatch = useDispatch();
  const onEdit = () => {
    dispatch(
      setHistory({
        type:
          item.revenueExpenditureType === 'REVENUE' ? 'income' : 'expenditure',
        price: String(item.cost),
        payment: item.paymentMethod,
        content: item.content,
        category: item.categoryName,
      }),
    );
    dispatch(selectDate(year + month + date - 1, date, year, month - 1));
    dispatch(setIsEdit(true, item.revenueExpenditureId));
  };
  return (
    <ItemRow>
      <div>
        <p
          className={
            item.revenueExpenditureType === 'REVENUE'
              ? 'plus category'
              : 'minus category'
          }
        >
          {item.categoryName}
        </p>
        <p className="content">{item.content}</p>
      </div>
      <p className="payment">{item.paymentMethod}</p>
      <p
        className={
          item.revenueExpenditureType === 'REVENUE'
            ? 'plus price'
            : 'minus price'
        }
      >
        ₩ {item.cost.toLocaleString()}
      </p>
      <button className="editBtn" onClick={onEdit}>
        <ModeEditOutlineOutlinedIcon />
      </button>
    </ItemRow>
  );
}

export default HistoryMainItem;
