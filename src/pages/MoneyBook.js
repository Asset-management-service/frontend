import { Outlet } from 'react-router-dom';
import NotLogin from '../components/common/NotLogin';
import SideBar from '../components/common/SideBar';
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

const MoneyBookNav = [
  {
    label: '수익 지출 관리',
    to: '/moneybook',
  },
  {
    label: '머니로그',
    to: '/moneybook/moneylog',
  },
  {
    label: '통계',
    to: '/moneybook/statistic',
  },
  {
    label: '설정',
    to: '/moneybook/setting',
  },
];
function MoneyBook({ auth }) {
  if (!auth) {
    return <NotLogin />;
  }
  return (
    <MainWrapper>
      <SideBar menu={'가계부'} navs={MoneyBookNav} />
      <Outlet />
    </MainWrapper>
  );
}

export default MoneyBook;
