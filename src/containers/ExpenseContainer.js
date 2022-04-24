import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fixRatioInput, changeRatioInput} from '../modules/expense';
import {SetExpenseRatio} from '../components/FinancialLedger/SetExpenseRatio';

function ExpenseContainer(){
    const [fixRatio,setFixRatio] = useState(" ");
    const [changeRatio,setChangeRatio] = useState(" ");

    const dispatch = useDispatch();

    const inputRatio = () => {
        dispatch(fixRatioInput(fixRatio));
        dispatch(changeRatioInput(changeRatio));
    }

    const FixRatioHandler = (event) => { 
        setFixRatio(event.currentTarget.value);
    }

    const ChangeRatioHandler = (event) => { 
        setChangeRatio(event.currentTarget.value);
    }

    return(
        <SetExpenseRatio
            value1={fixRatio}
            onChange1={FixRatioHandler}
            value2={changeRatio}
            onChange2={ChangeRatioHandler}
            onSubmit={inputRatio}
        />
    );


}

export default ExpenseContainer;