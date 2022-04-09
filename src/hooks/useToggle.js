import { useState } from 'react';

export const useToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);
  const onToggle = () => setToggle(!toggle);
  return [toggle, onToggle, setToggle];
};
