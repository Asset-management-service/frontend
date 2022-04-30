import { useDispatch } from 'react-redux';
import { useQueries, useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
import { MONEYBOOK_PAGE_NAV } from '../../constants/nav';
import { FINANCIAL_CATEGORY } from '../../constants/category';
import { useRedirect } from '../../hooks/useRedirect';
import { setCategory } from '../../modules/category';
import {
  getAssetBudget,
  getAssetExpenditureRatio,
  getSettingCategory,
} from '../../lib/api/setting';
import styled from 'styled-components';
import { setBudget } from '../../modules/budget';
import { setExpenseRatio } from '../../modules/expense';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  section {
    position: relative;
    flex-grow: 1;
    margin: 2rem;
    padding-left: 270px;
  }
  @media screen and (max-width: 1200px) {
    section {
      padding-left: 0;
      padding-top: 5rem;
    }
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
  const budgetQuery = useQuery(['getBudget'], () => getAssetBudget(), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(setBudget(data.budgetAmount));
    },
  });

  const expenseRatioQuery = useQuery(
    ['getExpenseRatio'],
    () => getAssetExpenditureRatio(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        dispatch(setExpenseRatio(data.fixed, data.variable));
      },
    },
  );

  return (
    <MainWrapper>
      <SideBar menu={'가계부'} navs={MONEYBOOK_PAGE_NAV} />
      {auth ? <Outlet /> : <NotLogin />}
    </MainWrapper>
  );
}

export default FinancialLedgerPage;
