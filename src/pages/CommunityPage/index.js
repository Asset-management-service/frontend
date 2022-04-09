import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../components/common/SideBar';
import { COMMUNITY_PAGE_NAV } from '../../constants/nav';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  padding-left: 266px;
  section {
    flex-grow: 1;
    margin: 2rem;
  }
`;

function CommunityPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  useEffect(() => {
    if (!category) navigate('/community/qna');
  }, [category]);
  return (
    <MainWrapper>
      <SideBar menu={'커뮤니티'} navs={COMMUNITY_PAGE_NAV} />
      <Outlet />
    </MainWrapper>
  );
}

export default CommunityPage;
