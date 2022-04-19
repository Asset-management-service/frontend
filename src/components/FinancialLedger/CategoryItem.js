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

function CategoryItem({item, onRemove}){
    const { id, text, checked } = item;
    return(
    <CategoryWrapper>
       <span>{text}</span>
      <DeleteIcon onClick={() => onRemove(id)}></DeleteIcon>
    </CategoryWrapper>
    );
}

export default CategoryItem;