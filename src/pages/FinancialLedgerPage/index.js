import { useDispatch } from 'react-redux';
import { useQueries, useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import { FINANCIAL_CATEGORY } from '../../constants';
import { useRedirect } from '../../hooks/useRedirect';
import { setCategory } from '../../modules/category';
import { setBudget } from '../../modules/budget';
import { setExpenseRatio } from '../../modules/expense';
import {
  getAssetBudget,
  getAssetExpenditureRatio,
  getSettingCategory,
} from '../../lib/api/setting';
import styled from 'styled-components';

const MainWrapper = styled.main`
  padding-top: 7rem;
  height: 100vh;
  section {
    position: relative;
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

  return <MainWrapper>{auth ? <Outlet /> : <NotLogin />}</MainWrapper>;
}

export default FinancialLedgerPage;
