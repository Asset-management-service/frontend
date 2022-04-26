import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  border-bottom: 1px solid black;
  justify-content: space-between;
  display: flex;
  padding: 10px;
  font-size: 20px;
`;

const CreateDeleteIcon = styled(DeleteIcon)`
  &:hover {
    cursor: pointer;
  }
`;

function CategoryItem({ item, onRemove }) {
  return (
    <CategoryWrapper>
      <span>{item.categoryName}</span>
      <CreateDeleteIcon
        onClick={() => onRemove(item.categoryId)}
      ></CreateDeleteIcon>
    </CategoryWrapper>
  );
}

export default CategoryItem;
