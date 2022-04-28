import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';
import { Button } from '../../components/common/Button';
import Loading from '../../components/common/Loading';
import { NotLoginModal } from '../../components/common/NotLogin';
import PostList from '../../components/Community/PostList';
import { useNotLogin } from '../../hooks/useNotLogin';
import { getRecentPosts } from '../../lib/api/post';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledButton = styled(Button)`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  display: inline-block;
  svg {
    font-size: 14px;
  }
`;

function CommunityListPage() {
  const { category } = useParams();
  const { data, hasNextPage, status, fetchNextPage } = useInfiniteQuery(
    ['recentPosts', category],
    ({ pageParam = 0 }) => getRecentPosts(category, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { number, totalPages } = lastPage;
        return number + 1 < totalPages ? number + 1 : undefined;
      },
      refetchOnWindowFocus: false,
    },
  );
  const { auth } = useSelector(({ login }) => login);
  const loadMoreRef = useRef(null);
  const { show, handleNotLogin, onClose } = useNotLogin(false);
  const to = `/community/write?category=${category}`;
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      }),
    );
    const el = loadMoreRef && loadMoreRef.current;
    if (!el) return;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [hasNextPage, loadMoreRef.current]);

  if (status === 'loading') {
    return (
      <section>
        <Loading mainColor="black" />
      </section>
    );
  }
  return (
    <section>
      <StyledButton
        outlined
        basiccolor="black"
        to={to}
        onClick={(e) => handleNotLogin(auth, e)}
      >
        <CreateOutlinedIcon /> 글쓰기
      </StyledButton>
      <PostList pages={data.pages} />
      <p className="loadMore" ref={loadMoreRef}>
        Load More
      </p>
      <NotLoginModal show={show} onClose={onClose} />
    </section>
  );
}

export default CommunityListPage;
