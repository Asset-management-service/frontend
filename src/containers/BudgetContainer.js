import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {budgetInput} from '../modules/budget';
import {SetMonthlyBudget} from '../components/FinancialLedger/SetMonthlyBudget';

function BudgetContainer({budget, onBudgetHandler, onBudgetSubmit, closeBudgetModalHandler, openBudgetModalHandler, isOpen}){
    const [budget, setBudget] = useState(" ")
    const onBudgetHandler = (event) => { 
    setBudget(event.currentTarget.value);
    }
    const [isOpen, setIsOpen] = useState(false);

    const openBudgetModalHandler = () => {
        setIsOpen(true);
    };
    //취소버튼 클릭 시  값 초화
    const closeBudgetModalHandler = () => {
        setBudget(" ")
        setIsOpen(false);
    }

    const onBudgetSubmit = (event) => {
        event.preventDefault();
        let check = /^[0-9]+$/;
        if(budget == " " && !check.test(budget) ){
            document.getElementById('setBudget').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
        }
        else if(isNaN(budget) === false && (budget != 0)){
            document.getElementById('showBudget').innerHTML=budget;
            document.getElementById('showBudget').style.color='black';
            setIsOpen(false)
        }
        else if(budget == 0){
            document.getElementById('setBudget').innerHTML='<b>입력 값이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
        }
        else{
            document.getElementById('setBudget').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setBudget').style.color='red';
    }


  return (
    <SetMonthlyBudget
      budgetValue={budget}
      onBudgetChange={onBudgetHandler}
      onBudgetCheckClick={onBudgetSubmit}
      onBudgetPropsClick={openBudgetModalHandler}
      onBudgetCancelClick={closeBudgetModalHandler}
      show={isOpen}
    />
  );
}
}

export default connect(
    state => ({budget: state.Budget.budget}),
    dispatch => ({
      budgetInput: () => dispatch(budgetInput()),
    })
)(BudgetContainer);
