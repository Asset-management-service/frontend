import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
import { MONEYBOOK_PAGE_NAV } from '../../constants/nav';
import { useRedirect } from '../../hooks/useRedirect';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  padding-left: 266px;
  section {
    position: relative;
    flex-grow: 1;
    margin: 2rem;
  }
`;

function FinancialLedgerPage({ auth }) {
  const { category } = useParams();
  useRedirect(category, '/financial/history');
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
