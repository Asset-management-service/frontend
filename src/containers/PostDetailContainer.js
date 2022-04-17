import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/common/Loading';
import PostDetail from '../components/Community/PostDetail';
import { getPost } from '../lib/api/post';
import { useToggle } from '../hooks';
import { useNavigate } from 'react-router-dom';

function PostDetailContainer({ id }) {
  const { data, isLoading } = useQuery(['postDetail', id], () => getPost(id));
  const timer = useRef(null);
  const navigate = useNavigate();
  const [like, setLike] = useToggle(false);
  const [scrap, setScrap] = useToggle(false);

  // 스크랩하기
  const onScrap = () => {};
  // 수정하기
  const onEdit = () => {
    navigate('/community/write', {
      state: {
        title: data.title,
        content: data.content,
        id: data.postId,
        images: [],
      },
    });
  };
  // 삭제하기
  const onDelete = () => {};
  // 좋아요
  const onLike = () => {
    setLike(!like);
  };
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => console.log(like), 2000); // 좋어요 추가 기능 api 작성
  }, [like]);
  if (isLoading) {
    return <Loading mainColor={'black'} />;
  }
  return (
    <PostDetail
      data={data}
      like={like}
      onLike={onLike}
      onScrap={onScrap}
      onEdit={onEdit}
      user={'true'}
    />
  );
}

export default PostDetailContainer;
