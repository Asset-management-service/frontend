import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../components/common/SideBar';
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

const CommunityNav = [
  {
    label: '자산관리 QnA',
    to: '/community/qna',
  },
  {
    label: '머니로그 & 통계 공유',
    to: '/community/share',
  },
  {
    label: '자유게시판',
    to: '/community/free',
  },
];
function CommunityPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  useEffect(() => {
    if (!category) navigate('/community/qna');
  }, [category]);
  return (
    <MainWrapper>
      <SideBar menu={'커뮤니티'} navs={CommunityNav} />
      <Outlet />
    </MainWrapper>
  );
}

export default CommunityPage;
