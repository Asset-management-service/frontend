import { Outlet, useParams } from 'react-router-dom';
import { COMMUNITY_CATEGORY } from '../../constants';
import { useRedirect } from '../../hooks/useRedirect';
import styled from 'styled-components';

const MainWrapper = styled.main`
  padding-top: 9rem;
  height: 100vh;
  width: 85vw;
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    font-size: 25px;
    margin-bottom: 1rem;
  }
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
      <h1>{COMMUNITY_CATEGORY[category]}</h1>
      <Outlet />
    </MainWrapper>
  );
}

export default CommunityPage;
