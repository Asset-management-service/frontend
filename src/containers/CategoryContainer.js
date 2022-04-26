import React from 'react';
import { useQuery, useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInput,
  insertCategory,
  removeCategory,
  setCategory,
} from '../modules/category';
import SetCategory from '../components/FinancialLedger/SetCategory';
import {
  getSettingCategory,
  postSettingCategory,
  deleteSettingCategory,
} from '../lib/api/setting';

function CategoryContainer({ content }) {
  const category = useSelector(({ category }) => category);
  const dispatch = useDispatch();
  const { data, status } = useQuery(
    ['getCategory', content],
    () => getSettingCategory(content.toLowerCase()),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        dispatch(setCategory(content, data.categories));
      },
    },
  );
  const insertMutation = useMutation(
    () => postSettingCategory(content, category.categoryInput),
    {
      onSuccess: (data) => {
        dispatch(insertCategory(content, data.categoryName));
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
