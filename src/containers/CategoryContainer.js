import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  insertCategory,
  removeCategory,
} from '../modules/category';
import SetCategory from '../components/FinancialLedger/SetCategory';
import { postSettingCategory, deleteSettingCategory } from '../lib/api/setting';

function CategoryContainer({ content }) {
  const category = useSelector(({ category }) => category);
  const dispatch = useDispatch();
  const insertMutation = useMutation(
    () => postSettingCategory(content, category.categoryInput),
    {
      onSuccess: (data) => {
        dispatch(insertCategory(content, data.categoryId));
        dispatch(changeInput(''));
      },
    },
  );

  const deleteMutation = useMutation(
    (categoryId) => deleteSettingCategory(categoryId),
    {
      onSuccess: (data, variables) => {
        dispatch(removeCategory(content, variables));
      },
    },
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.input === '') return;
    insertMutation.mutate();
  };

  const onRemove = (id) => {
    deleteMutation.mutate(id);
  };
  return (
    <SetCategory
      content={content}
      items={category[content]}
      onRemove={onRemove}
      handleSubmit={handleSubmit}
      category={category}
    />
  );
}

export default CategoryContainer;
