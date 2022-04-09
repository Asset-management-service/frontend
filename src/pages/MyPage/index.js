import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
import { MY_PAGE_NAV } from '../../constants/nav';
import styled from 'styled-components';

const MyPageWrapper = styled.main`
  padding-top: 4.5rem;
  display: flex;
  height: 100vh;
  padding-left: 266px;
  section {
    flex-grow: 1;
    margin: 2rem;
    h2 {
      font-size: 25px;
    }
  }
`;

function MyPage({ auth }) {
  const navigate = useNavigate();
  const { category } = useParams();
  useEffect(() => {
    if (!category) navigate('/mypage/edit');
  }, [category]);
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
