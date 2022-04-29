import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import DoubleCheckModal from '../common/DoubleCheckModal';
import { setHistory, setIsEdit } from '../../modules/history';
import { selectDate } from '../../modules/calender';
import { deleteHistory } from '../../lib/api/history';
import styled from 'styled-components';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ItemRow = styled.div`
  display: grid;
  padding: 0.5rem 1.5rem;
  grid-template-columns: 4fr 2fr 2fr;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  position: relative;
  &:hover {
    background-color: #f9f9f9;
    .buttonBox {
      transform: translateY(50%);
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

const ButtonBox = styled.div`
  position: absolute;
  transition: all 0.2s ease-in-out;
  width: 0;
  height: 0;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
  button {
    margin: 0 0.5rem;
  }
  svg {
    transition: all 0.2s ease-in-out;
    width: 0;
    height: 0;
  }
`;

function HistoryMainItem({ item, date }) {
  const { year, month } = useSelector(({ calender }) => calender);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation((id) => deleteHistory(id), {
    onSuccess: () => {
      queryClient.refetchQueries(['getHistory', year, month]);
    },
  });
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
    dispatch(selectDate(year + month + date, date, year, month));
    dispatch(setIsEdit(true, item.revenueExpenditureId));
  };
  const onRemove = () => {
    deleteMutation.mutate(item.revenueExpenditureId);
    setShow(false);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
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
        <ButtonBox className="buttonBox">
          <button onClick={onEdit}>
            <ModeEditOutlineOutlinedIcon />
          </button>
          <button onClick={() => setShow(true)}>
            <DeleteOutlinedIcon />
          </button>
        </ButtonBox>
      </ItemRow>
      <DoubleCheckModal
        text="삭제하시겠습니까?"
        show={show}
        onCancel={closeModal}
        onSubmit={onRemove}
      />
    </>
  );
}

export default HistoryMainItem;
