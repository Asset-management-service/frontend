import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryItemList({items}) {
  return (
      <div>
           {items.map((item) => (
            <CategoryItem
          item={item}
          key={item.id}
    />
      ))}
      </div>
  );
}

export default CategoryItemList;