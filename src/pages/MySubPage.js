import { useParams } from 'react-router-dom';
import MyPostList from '../components/MyPage/MyPostList';
import PrivateInfo from '../components/MyPage/PrivateInfo';
import WithDraw from '../components/MyPage/WithDraw';

function MySubPage() {
  const { category } = useParams();
  if (category === 'edit') {
    return <PrivateInfo />;
  }
  if (category === 'withdraw') {
    return <WithDraw />;
  }
  if (category === 'post') {
    return (
      <MyPostList
        category={category}
        posts={[
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 팁',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: 'MBTI별 저축 성향',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },

          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
          {
            id: 2888292,
            category: '자산 관리 Q&A',
            title: '제목제목제목',
            commentNum: 6,
            date: '2021.08.14',
            views: 1132,
          },
        ]}
      />
    );
  }
  if (category === 'scrap') {
    return <MyPostList category={category} posts={[]} />;
  }
  if (category === 'comment') {
    return <MyPostList category={category} posts={[]} />;
  }
  return <h1>Sub</h1>;
}

export default MySubPage;
