import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import SideBar from '../../components/common/SideBar';
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

const MY_PAGE_NAV = [
  {
    to: '/mypage/edit',
    label: '개인정보 변경',
  },
  {
    to: '/mypage/badge',
    label: '내 뱃지',
  },
  {
    to: '/mypage/post',
    label: '내가 쓴 글',
  },
  {
    to: '/mypage/comment',
    label: '내가 쓴 댓글',
  },
  {
    to: '/mypage/scrap',
    label: '스크랩 보기',
  },
];
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
