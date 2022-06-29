import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import HistoryForm from '../components/FinancialLedger/HistoryForm';
import { editHistory, postHistory } from '../lib/api/history';
import { initialize } from '../modules/calender';
import {
  changeInput,
  setCategoryType,
  setHistory,
  setShow,
} from '../modules/history';

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
    () =>
      postHistory(
        history.category,
        history.categoryType,
        history.content,
        Number(history.price),
        history.payment,
        year,
        month + 1,
        date,
        history.revenueExpenditureType,
      ),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['getHistory', year, month]);
      },
    },
  );
  const editMutation = useMutation(
    () =>
      editHistory(
        history.category,
        history.categoryType,
        history.content,
        Number(history.price),
        year,
        month + 1,
        date,
        history.payment,
        history.revenueExpenditureType,
        history.id,
      ),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['getHistory', year, month]);
      },
    },
  );

  useEffect(() => {
    if (history.revenueExpenditureType === 'REVENUE') {
      dispatch(setCategoryType('REVENUE'));
    } else {
      dispatch(setCategoryType('FIXED'));
    }
  }, [history.revenueExpenditureType]);

  useEffect(() => {
    if (history.categoryType === 'REVENUE') {
      setCategories(
        category['REVENUE'].map((category) => category.categoryName),
      );
    } else if (history.categoryType === 'FIXED') {
      setCategories(category['FIXED'].map((category) => category.categoryName));
    } else if (history.categoryType === 'VARIABLE') {
      setCategories(
        category['VARIABLE'].map((category) => category.categoryName),
      );
    }
  }, [history.categoryType, category]);

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
      dispatch(initialize());
    };
  }, []);

  useEffect(() => {
    console.log(history);
  }, [history]);

  const onOpen = () => {
    dispatch(setShow(true));
  };
  const onChange = (e) => {
    dispatch(changeInput(e.target.name, e.target.value));
  };
  const onCancel = (e) => {
    e.preventDefault();
    dispatch(
      setHistory({
        categoryType: '',
        payment: '',
        category: '',
        price: '',
        content: '',
        isEdit: false,
        id: null,
      }),
    );
    dispatch(initialize());
    dispatch(setShow(false));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(Number(history.price))) return;
    if (
      history.category === '' ||
      history.content === '' ||
      history.categoryType === ''
    )
      return;
    if (history.isEdit) {
      editMutation.mutate();
    } else {
      postMutation.mutate();
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
    dispatch(setShow(false));
  };

  return (
    <HistoryForm
      history={history}
      onChange={onChange}
      onCancel={onCancel}
      onSubmit={onSubmit}
      categories={categories}
      payments={payments}
      show={history.show}
      onOpen={onOpen}
    />
  );
}

export default HistoryFormContainer;
