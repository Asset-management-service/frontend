import { Outlet, useParams } from 'react-router-dom';
import { NotLogin } from '../../components/common/NotLogin';
import styled from 'styled-components';
import { useRedirect } from '../../hooks/useRedirect';

const MyPageWrapper = styled.main`
  padding-top: 10rem;
  display: flex;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  section {
    flex-grow: 1;
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
      <Outlet />
    </MyPageWrapper>
  );
}

export default MyPage;
