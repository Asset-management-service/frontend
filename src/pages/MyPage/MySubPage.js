import { useParams } from 'react-router-dom';
import MyBadgeList from '../../components/MyPage/MyBadgeList';
import MyPostList from '../../components/MyPage/MyPostList';
// 추가

function MySubPage() {
  const { category } = useParams();
  if (category === 'edit') {
    return <></>;
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
    return (
      <MyPostList
        category={category}
        posts={[
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
          {
            id: 1,
            comment: '감사합니다!',
            date: '2021.08.14',
            title: '제목제목제목',
            commentNum: 6,
            category: '자산관리 QnA',
          },
        ]}
      />
    );
  }
  return <h1>Sub</h1>;
}

export default MySubPage;
