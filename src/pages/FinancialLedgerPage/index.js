import { useDispatch } from 'react-redux';
import { useQueries } from 'react-query';
import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
import { MONEYBOOK_PAGE_NAV } from '../../constants/nav';
import { FINANCIAL_CATEGORY } from '../../constants/category';
import { useRedirect } from '../../hooks/useRedirect';
import { setCategory } from '../../modules/category';
import { getSettingCategory } from '../../lib/api/setting';
import styled from 'styled-components';
import { useEffect } from 'react';
import { setBudget } from '../../modules/budget';
import { setExpenseRatio } from '../../modules/expense';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  section {
    position: relative;
    flex-grow: 1;
    margin: 2rem;
  }
`;

function FinancialLedgerPage({ auth }) {
  const dispatch = useDispatch();
  const { category } = useParams();
  useRedirect(category, '/financial/history');
  const result = useQueries(
    Object.keys(FINANCIAL_CATEGORY).map((key) => ({
      queryKey: ['getCategory', key],
      queryFn: () => getSettingCategory(key.toLowerCase()),
      onSuccess: (data) => {
        dispatch(setCategory(key, data.categories));
      },
      refetchOnWindowFocus: false,
    })),
  );

  useEffect(() => {
    dispatch(setBudget(Number(localStorage.getItem('BUDGET'))));
    dispatch(
      setExpenseRatio(
        Number(localStorage.getItem('FIX_RATIO')),
        Number(localStorage.getItem('VARIABLE_RATIO')),
      ),
    );
  }, []);

  if (!auth) {
    return <NotLogin />;
  }
  return (
    <MainWrapper>
      <SideBar menu={'가계부'} navs={MONEYBOOK_PAGE_NAV} />
      <Outlet />
    </MainWrapper>
  );
}

export default FinancialLedgerPage;
