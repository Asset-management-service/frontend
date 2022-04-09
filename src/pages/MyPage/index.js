import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import NotLogin from '../../components/common/NotLogin';
import SideBar from '../../components/MyPage/SideBar';
import styled from 'styled-components';

const MyPageWrapper = styled.main`
  width: 90vw;
  max-width: 1500px;
  margin: 6rem auto 0;
  padding-top: 5rem;
  .MyPage-content {
    display: flex;
    height: 60vh;
  }
  section {
    margin-left: 3rem;
    width: 60vw;
    h2 {
      font-size: 25px;
    }
  }
`;

const MyPageHeading = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  h1 {
    margin-right: 10px;
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
      <MyPageHeading>
        <h1>마이페이지</h1>
      </MyPageHeading>
      <div className="MyPage-content">
        <SideBar />
        <Outlet />
      </div>
    </MyPageWrapper>
  );
}

export default MyPage;
