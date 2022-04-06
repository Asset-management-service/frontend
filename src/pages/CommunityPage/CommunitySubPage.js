import { useParams } from 'react-router-dom';
import CommunityDetailPage from './CommunityDetailPage';
import CommunityListPage from './CommunityListPage';

function CommunitySubPage() {
  const { category, id } = useParams();
  if (id) {
    return <CommunityDetailPage id={id} />;
  }
  return <CommunityListPage categoy={category} />;
}

export default CommunitySubPage;
