import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
import { MY_PAGE_NAV } from '../../constants/nav';
import styled from 'styled-components';
import { useRedirect } from '../../hooks/useRedirect';

const MyPageWrapper = styled.main`
  padding-top: 4.5rem;
  display: flex;
  height: 100vh;
  padding-left: 266px;
  section {
    flex-grow: 1;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 25px;
    }
    .loadMore {
      opacity: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    padding-left: 0;
    padding-top: 8rem;
  }
`;

function MyPage({ auth }) {
  const { category } = useParams();
  useRedirect(category, '/mypage/edit');

  if (!auth) {
    return <NotLogin />;
  }
  return (
    <MyPageWrapper>
      <SideBar navs={MY_PAGE_NAV} menu="마이페이지" />
      <Outlet />
    </MyPageWrapper>
  );
}

export default MyPage;
