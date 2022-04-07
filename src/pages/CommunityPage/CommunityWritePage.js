import { useSearchParams } from 'react-router-dom';
function CommunityWritePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  return <main>{id ? id : 0}</main>;
}

export default CommunityWritePage;
