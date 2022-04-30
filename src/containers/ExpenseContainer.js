import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import SetExpenseRatio from '../components/FinancialLedger/SetExpenseRatio';
import {
  changeExpenseRatio,
  initializeRatioInput,
  setExpenseRatio,
} from '../modules/expense';
import { putAssetExpenditureRatio } from '../lib/api/setting';

function ExpenseContainer() {
  const { fixRatio, variableRatio, input } = useSelector(
    ({ expense }) => expense,
  );
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  });

  const putMutation = useMutation(() =>
    putAssetExpenditureRatio(
      Number(input.fixRatio),
      Number(input.variableRatio),
    ),
  );
  const openRatioModalHandler = () => {
    setIsOpen(true);
  };

  //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
  const closeRatioModalHandler = () => {
    dispatch(initializeRatioInput());
    setIsOpen(false);
  };

  const onChangeExpenseRatio = (e) => {
    dispatch(changeExpenseRatio(e.target.name, e.target.value));
  };

  const onRatioSubmit = (event) => {
    event.preventDefault();
    const ratio1 = Number(input.fixRatio);
    const ratio2 = Number(input.variableRatio);
    const ratioSum = ratio1 + ratio2;
    let check = /^[0-9]+$/;
    if (
      isNaN(ratio1) ||
      isNaN(ratio2) ||
      (input.fixRatio == '' && !check.test(input.fixRatio)) ||
      (input.variableRatio == '' && !check.test(input.variableRatio))
    ) {
      setError({
        isError: true,
        errorMessage: '입력 형식이 올바르지 않습니다.',
      });
      dispatch(initializeRatioInput());
    } else if (ratioSum === 100) {
      dispatch(setExpenseRatio(ratio1, ratio2));
      putMutation.mutate();
      setIsOpen(false);
      dispatch(initializeRatioInput());
    } else if (ratioSum !== 100) {
      setError({
        isError: true,
        errorMessage: '총합이 100%가 아닙니다!',
      });
    }
  };

  return (
    <SetExpenseRatio
      ratioInput={input}
      fixRatio={fixRatio}
      variableRatio={variableRatio}
      onChangeExpenseRatio={onChangeExpenseRatio}
      onRatioSubmit={onRatioSubmit}
      show={isOpen}
      openRatioModalHandler={openRatioModalHandler}
      closeRatioModalHandler={closeRatioModalHandler}
      error={error.isError}
      errorMessage={error.errorMessage}
    />
  );
}

export default ExpenseContainer;
