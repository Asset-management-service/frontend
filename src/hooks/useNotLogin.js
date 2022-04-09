import { useState } from 'react';
export const useNotLogin = (initialState) => {
  const [show, setShow] = useState(initialState);
  const onClose = () => {
    setShow(false);
  };
  const handleNotLogin = (auth, e) => {
    if (!auth) {
      e.preventDefault();
      setShow(true);
    }
  };
  return {
    show,
    handleNotLogin,
    onClose,
  };
};
