import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NotLogin } from '../../components/common/NotLogin';
import WriteActionButtons from '../../components/common/WriteActionButtons';
import EditorContainer from '../../containers/EditorContainer';
import { initialize, setPost } from '../../modules/post';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { createPost } from '../../lib/api/post';
import Loading from '../../components/common/Loading';

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
  const { title, content, imageFiles, postId } = useSelector(
    ({ post }) => post,
  );
  const createMutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: () => {
      navigate(`/community/${category}`, { replace: true });
    },
  });
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const navigate = useNavigate();
  const { state } = useLocation();
  const contentRef = useRef(null);
  const [error, setError] = useState(false);

  const onCancel = () => navigate('/community');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || content === '') setError(true);
    else {
      const newPost = {
        category,
        title,
        content,
        imageFiles,
      };
      createMutation.mutate(newPost);
    }
    // post api or patch api
    // navigate to /community/category/id
  };
  useEffect(() => {
    if (state) {
      console.log(state);
      dispatch(
        setPost({
          title: state.title === undefined ? '' : state.title,
          content: state.content,
          imageFiles: state.images,
          postId: state.id,
        }),
      );
    } else {
      dispatch(
        setPost({
          title: '',
          imageFiles: [],
          content: '',
        }),
      );
    }
  }, [state]);
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

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
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
        <EditorContainer error={error} contentRef={contentRef} />
      </StyledForm>
    </main>
  );
}

export default CommunityWritePage;
