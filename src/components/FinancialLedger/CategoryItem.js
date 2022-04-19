import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';


const CategoryWrapper = styled.div`
    border-bottom: 1px solid black;
    justify-content: space-between;
    display: flex;
    padding: 10px;
    font-size: 20px;
`;

function CategoryItem({item}){
    const { id, text, checked } = item;
    return(
    <CategoryWrapper>
       <span>{text}</span>
      <DeleteIcon></DeleteIcon>
    </CategoryWrapper>
    );
}

export default CategoryItem;