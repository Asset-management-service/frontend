import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import HistoryForm from '../components/FinancialLedger/HistoryForm';
import { deleteHistory, editHistory, postHistory } from '../lib/api/history';
import { changeInput, setHistory, setIsEdit } from '../modules/history';

function HistoryFormContainer() {
  const { year, month, date } = useSelector(
    ({ calender }) => calender.selected,
  );
  const queryClient = useQueryClient();
  const history = useSelector(({ history }) => history);
  const dispatch = useDispatch();
  const category = useSelector(({ category }) => category);
  const [categories, setCategories] = useState([]);
  const [payments, setPayments] = useState([]);
  const postMutation = useMutation(
    (type) =>
      postHistory(
        history.category,
        history.content,
        Number(history.price),
        history.payment,
        year,
        month + 1,
        date,
        type,
      ),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['getHistory', year, month]);
      },
    },
  );
  const editMutation = useMutation(
    (type) =>
      editHistory(
        history.category,
        history.content,
        Number(history.price),
        year,
        month + 1,
        date,
        history.payment,
        type,
        history.id,
      ),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['getHistory', year, month]);
      },
    },
  );

  useEffect(() => {
    if (history.type === 'income') {
      setCategories(
        category['REVENUE'].map((category) => category.categoryName),
      );
    } else if (history.type === 'expenditure') {
      setCategories(
        category['FIXED']
          .map((category) => category.categoryName)
          .concat(
            category['VARIABLE'].map((category) => category.categoryName),
          ),
      );
    }
  }, [history.type, category]);

  useEffect(() => {
    setPayments(category['PAYMENT'].map((category) => category.categoryName));
  }, [category]);

  useEffect(() => {
    return () => {
      dispatch(
        setHistory({
          payment: '',
          category: '',
          price: '',
          content: '',
          isEdit: false,
          id: null,
        }),
      );
    };
  }, []);
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
        isEdit: false,
        id: null,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(Number(history.price))) return;
    if (history.category === '' || history.content === '') return;
    if (history.isEdit) {
      if (history.type == 'income') {
        editMutation.mutate('REVENUE');
      } else {
        editMutation.mutate('EXPENDITURE');
      }
    } else {
      if (history.type == 'income') {
        postMutation.mutate('REVENUE');
      } else {
        postMutation.mutate('EXPENDITURE');
      }
    }
    dispatch(
      setHistory({
        payment: '',
        category: '',
        price: '',
        content: '',
        isEdit: false,
        id: null,
      }),
    );
  };

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
