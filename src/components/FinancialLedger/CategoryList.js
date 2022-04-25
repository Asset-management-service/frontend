import React from "react";
import styled from 'styled-components';
import CategoryItem from "./CategoryItem";

const CategoryItemListWrapper = styled.div`
    margin-bottom: 15em;
`;

function CategoryItemList({items, onRemove}) {
  return (
      <CategoryItemListWrapper>
           {items.map((item) => (
            <CategoryItem
          item={item}
          key={item.id}
          onRemove={onRemove}
          />
      ))}
     </CategoryItemListWrapper>
  );
}

export default CategoryItemList;