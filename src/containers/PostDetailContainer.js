import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import Loading from '../components/common/Loading';
import PostDetail from '../components/Community/PostDetail';
import DoubleCheckModal from '../components/common/DoubleCheckModal';
import { deletePost, getPost, likePost, scrapPost } from '../lib/api/post';

function PostDetailContainer({ id, category }) {
  const { data, status, remove } = useQuery(
    ['postDetail', id],
    () => getPost(id),
    {
      onSuccess: (data) => {
        setLike(data.myLike);
        setScrap(data.myScrap);
      },
      refetchOnWindowFocus: false,
    },
  );
  const deleteMutation = useMutation((postId) => deletePost(postId), {
    onSuccess: () => {
      navigate(`/community/${category}`, { replace: true });
    },
  });
  const scrapMutation = useMutation((postId) => scrapPost(postId), {
    onSuccess: (data) => {
      setScrap(data.scrapStatus);
    },
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(null);
  const [scrap, setScrap] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (like !== null && data.myLike !== like) {
        likePost(data.postId);
      }
    }, 2000);
  }, [like]);
  useEffect(() => {
    return () => remove();
  }, []);

  const onScrap = () => {
    if (scrap) {
      alert('이미 스크랩한 글입니다.');
    } else {
      scrapMutation.mutate(id);
    }
  };

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
  const onDelete = (e) => {
    e.preventDefault();
    deleteMutation.mutate(id);
  };
  if (status === 'loading') {
    return <Loading mainColor={'black'} />;
  }
  if (deleteMutation.status === 'loading') {
    return <Loading mainColor={'black'} text="게시물 삭제중..." />;
  }
  return (
    <>
      <PostDetail
        post={data}
        onEdit={onEdit}
        onDelete={() => setShow(true)}
        like={like}
        onLike={() => setLike(!like)}
        onScrap={onScrap}
      />
      <DoubleCheckModal
        text="게시물을 삭제하시겠습니까?"
        show={show}
        onCancel={() => setShow(false)}
        onSubmit={onDelete}
      />
    </>
  );
}

export default PostDetailContainer;
