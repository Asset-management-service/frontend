import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryItemList({items, onRemove}) {
  return (
      <div>
           {items.map((item) => (
            <CategoryItem
          item={item}
          key={item.id}
          onRemove={onRemove}
    />
      ))}
      </div>
  );
}

export default CategoryItemList;