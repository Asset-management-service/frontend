import { Outlet } from 'react-router-dom';
import { NotLogin } from '../components/common/NotLogin';
import SideBar from '../components/common/SideBar';
import { MONEYBOOK_PAGE_NAV } from '../constants/nav';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  section {
    flex-grow: 1;
    margin: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

function MoneyBook({ auth }) {
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

export default MoneyBook;
