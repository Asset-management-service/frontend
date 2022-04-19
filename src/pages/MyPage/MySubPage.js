import { useParams } from 'react-router-dom';
import MyBadgeList from '../../components/MyPage/MyBadgeList';
import MyPostList from '../../components/MyPage/MyPostList';
import PersonalInfoChangeForm from '../../components/MyPage/PersonalInfoChangeForm';

function MySubPage() {
  const { category } = useParams();
  if (category === 'edit') {
    return <PersonalInfoChangeForm />;
  }
  if (category === 'badge') {
    return (
      <MyBadgeList
        badges={[
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
          {
            img: null,
            badge: '모아모아 시작뱃지',
            date: '2021.08.14',
          },
        ]}
      />
    );
  }
  if (category === 'post' || category === 'scrap' || category === 'comment') {
    return <MyPostList category={category} />;
  }
  return <h1>Sub</h1>;
}

export default MySubPage;
