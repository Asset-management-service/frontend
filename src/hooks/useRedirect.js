import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = (category, redirectUrl) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!category) navigate(redirectUrl);
  }, [category]);
};
