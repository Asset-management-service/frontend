import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HistoryForm from '../components/FinancialLedger/HistoryForm';
import { changeInput, setHistory, setIsEdit } from '../modules/history';

function HistoryFormContainer() {
  const { year, month, date } = useSelector(
    ({ calender }) => calender.selected,
  );
  const history = useSelector(({ history }) => history);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(['식비', '교통비', '쇼핑']); // setting 전역 상태를 만들어야 할 것 같음.
  const [payments, setPayments] = useState(['신용카드', '체크카드', '현금']);
  const onChange = (e) => {
    dispatch(changeInput(e.target.name, e.target.value));
  };
  const onCancel = (e) => {
    e.preventDefault();
    dispatch(
      setHistory({
        payment: '',
        category: '',
        price: '',
        content: '',
        include: false,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (history.isEdit) {
      console.log(history);
      console.log(year, month, date);
      dispatch(setIsEdit(false));
    } else {
    }
    dispatch(
      setHistory({
        payment: '',
        category: '',
        price: '',
        content: '',
        include: false,
      }),
    );
  };
  useEffect(() => {
    if (history.type === 'income') {
      setCategories(['월급', '주식']);
    } else if (history.type === 'expenditure') {
      setCategories(['식비', '교통비', '쇼핑']);
    }
  }, [history.type]);

  return (
    <HistoryForm
      history={history}
      onChange={onChange}
      onCancel={onCancel}
      onSubmit={onSubmit}
      categories={categories}
      payments={payments}
    />
  );
}

export default HistoryFormContainer;
