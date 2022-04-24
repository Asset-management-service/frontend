import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeInput, insert, remove} from '../modules/category';
import {SetCategory} from '../components/FinancialLedger/SetCategory';


function CategoryContainer(){
    const [categoryInput, setcategoryInput] = useState(" ");
    let nextId = useRef(4);
    const dispatch = useDispatch();

    const insert = (event) => {
        setcategoryInput(e.target.value);
    };

    const remove = (event) => {
        setcategoryInput("");
    };


    const inputCategory = () => {
        dispatch(changeInput(item));
        dispatch(insert(text));
        dispatch(remove(id));
    }

    return(
        <SetCategory
            value={budget}
            onChange={budgetHandler}
            onSubmit={inputBudget}
        />
    );


}

export default CategoryContainer;