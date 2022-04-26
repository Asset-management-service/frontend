import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import SetMonthlyBudget from '../components/FinancialLedger/SetMonthlyBudget';
import { putAssetBudget } from '../lib/api/setting';
import { changeBudgetInput, setBudget } from '../modules/budget';

function BudgetContainer() {
  const { budgetAmount, input } = useSelector(({ budget }) => budget);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  });
  const mutation = useMutation(() => putAssetBudget(Number(input)), {
    onSuccess: (data) => {
      dispatch(setBudget(parseInt(input)));
      console.log(data);
    },
  });
  const onBudgetHandler = (e) => {
    dispatch(changeBudgetInput(e.target.value));
  };

  const openBudgetModalHandler = () => {
    setIsOpen(true);
  };
  //취소버튼 클릭 시  값 초화
  const closeBudgetModalHandler = () => {
    dispatch(changeBudgetInput(''));
    setIsOpen(false);
    setError({
      isError: false,
      errorMessage: '',
    });
  };

  const onBudgetSubmit = (event) => {
    event.preventDefault();
    const budget = Number(input);
    let check = /^[0-9]+$/;
    if (input === '' && !check.test(input)) {
      setError({
        isError: true,
        errorMessage: '입력 값이 올바르지 않습니다',
      });
    } else if (isNaN(budget) === false && budget != 0) {
      mutation.mutate();
      setIsOpen(false);
      setError({
        isError: false,
        errorMessage: '',
      });
    } else {
      setError({
        isError: true,
        errorMessage: '입력값이 올바르지 않습니다',
      });
    }
  };

  return (
    <SetMonthlyBudget
      budgetAmount={budgetAmount}
      budgetInput={input}
      onBudgetChange={onBudgetHandler}
      onBudgetSubmit={onBudgetSubmit}
      openBudgetModalHandler={openBudgetModalHandler}
      closeBudgetModalHandler={closeBudgetModalHandler}
      show={isOpen}
      error={error.isError}
      errorMessage={error.errorMessage}
    />
  );
}

export default BudgetContainer;
