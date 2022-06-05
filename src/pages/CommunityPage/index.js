import { Outlet, useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import styled from 'styled-components';

const MainWrapper = styled.main`
  padding-top: 9rem;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  .loadMore {
    opacity: 0;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 0;
    padding-top: 8rem;
  }
`;

function CommunityPage() {
  const { category } = useParams();
  useRedirect(category, '/community/qna');
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
}

export default CommunityPage;
