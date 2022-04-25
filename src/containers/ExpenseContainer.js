import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fixRatioInput, changeRatioInput, changeModal} from '../modules/expense';
import {SetExpenseRatio} from '../components/FinancialLedger/SetExpenseRatio';

function ExpenseContainer({fixRatio, changeRatio, onRatioSubmit, openRatioModalHandler,closeRatioModalHandler, isOpen}){
    const [fixRatio,setFixRatio] = useState(" ");
    const [changeRatio,setChangeRatio] = useState(" ");
    const [isOpen, setIsOpen] = useState(false);

    const openRatioModalHandler = () => {
        setIsOpen(true);
    };

    //취소 버튼을 부르면 입력값도 모두 사라지도록 설정
    const closeRatioModalHandler = () => {
        setFixRatio(" ");
        setChangeRatio(" ");
        setIsOpen(false);
    }

    const FixRatioHandler = (event) => { 
        setFixRatio(event.currentTarget.value);
    }

    const ChangeRatioHandler = (event) => { 
        setChangeRatio(event.currentTarget.value);
    }

    const onRatioSubmit = (event) => {
        event.preventDefault();
        const ratio1 = parseInt(fixRatio);
        const ratio2 = parseInt(changeRatio);
        const ratioSum = ratio1 +ratio2
        let check = /^[0-9]+$/;
        if(fixRatio == " " && !check.test(fixRatio) ||  changeRatio == " " && !check.test(changeRatio)){
            document.getElementById('setRatio').innerHTML='<b>입력 형식이 올바르지 않습니다.<b>';
            document.getElementById('setRatio').style.color='red';
        }

        else if(ratioSum === 100){
            document.getElementById('showFixRatio').innerHTML=fixRatio;
            document.getElementById('showChangeRatio').innerHTML=changeRatio;
            setIsOpen(false)
        }

        else if(ratioSum !== 100){
            document.getElementById('setRatio').innerHTML='<b>총합이 100%가 아닙니다! 다시 입력해주세요!<b>';
            document.getElementById('setRatio').style.color='red';
        }

        setFixRatio(" ");
        setChangeRatio(" ");
}

    return(
        <SetExpenseRatio
            value1={fixRatio}
            onChange1={FixRatioHandler}
            value2={changeRatio}
            show={isOpen}
            onChange2={ChangeRatioHandler}
            onCheckButtonClick={onRatioSubmit}
            onContetnsWrapperClick={openRatioModalHandler}
            onCancelButtonClick={closeRatioModalHandler} 
        />
    );


}

export default connect(
    state => ({fixRatio: state.Expense.fixRatio,
        changeRatio: state.Expense.changeRatio,
        isOpen: state.Expense.isOpen}),
    dispatch => ({
      fixRatioInput: () => dispatch(fixRatioInput()),
      chageRatioInput: () => dispatch(changeRatioInput()),
      changeModal: () => dispatch(changeModal()),
    })
)(ExpenseContainer);
