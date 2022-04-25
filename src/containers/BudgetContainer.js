import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {budgetInput} from '../modules/budget';
import {SetMonthlyBudget} from '../components/FinancialLedger/SetMonthlyBudget';

function BudgetContainer(){
    const [budget, setBudget] = useState(" ")
    const dispatch = useDispatch();
    const budgetInput = () => dispatch(budgetInput(budget));
    }

     return (
    <SetMonthlyBudget //Todos 컴포넌트에 props로 전달
      value={budget}
    />
  );
}

export default BudgetContainer;