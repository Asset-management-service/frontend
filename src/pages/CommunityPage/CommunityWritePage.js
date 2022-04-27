import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import Loading from '../../components/common/Loading';
import { NotLogin } from '../../components/common/NotLogin';
import WriteActionButtons from '../../components/common/WriteActionButtons';
import EditorContainer from '../../containers/EditorContainer';
import { prepareShare, initialize } from '../../modules/post';
import { createPost, editPost } from '../../lib/api/post';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4.5rem;
  height: 100vh;
  label {
    margin: 1rem 0;
  }
`;

function CommunityWritePage() {
  const { auth } = useSelector(({ login }) => login);
  const { title, content, saveImageUrl, imageFiles, postId } = useSelector(
    ({ post }) => post,
  );
  const createMutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: (data) => {
      navigate(`/community/${category}/${data.postId}`, { replace: true });
    },
  });
  const editMutation = useMutation((post) => editPost(post), {
    onSuccess: (data) => {
      navigate(`/community/${category}/${data.postId}`, { replace: true });
    },
  });
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (category === 'share') {
      dispatch(prepareShare());
    }
    return () => {
      dispatch(initialize());
    };
  }, []);

  const onCancel = () => navigate('/community');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      setError(true);
      return;
    }
    if (postId) {
      const post = {
        title,
        content,
        imageFiles,
        saveImageUrl,
        postId,
      };
      editMutation.mutate(post);
    } else {
      const newPost = {
        category,
        title,
        content,
        imageFiles,
      };
      createMutation.mutate(newPost);
    }
  };

  if (!auth) {
    return <NotLogin />;
  }
  if (createMutation.status === 'loading') {
    return <Loading mainColor="black" text="게시물 등록 중..." />;
  }
  return (
    <main style={{ padding: 0 }}>
      <StyledForm>
        <WriteActionButtons
          isEdit={postId ? 'true' : undefined}
          isShare={category === 'share' ? 'true' : undefined}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
        <EditorContainer error={error} />
      </StyledForm>
    </main>
  );
}

export default CommunityWritePage;
