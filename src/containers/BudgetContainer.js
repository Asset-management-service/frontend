import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setMonthlyInput} from '../modules/budget';
import {SetMonthlyBudget} from '../components/FinancialLedger/SetMonthlyBudget';

function BudgetContainer(){
    const [budget,setBudget] = useState(" ");
    const dispatch = useDispatch();

    const inputBudget = () => {
        dispatch(setMonthlyInput(budget));
    }

    const budgetHandler = (event) => { 
    setBudget(event.currentTarget.value);
    }

    return(
        <SetMonthlyBudget
            value={budget}
            onChange={budgetHandler}
            onSubmit={inputBudget}
        />
    );


}

export default BudgetContainer;