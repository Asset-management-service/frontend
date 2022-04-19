import { Fragment, useEffect, useRef } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';
import Loading from '../common/Loading';
import MyPostItem from './MyPostItem';
import MyCommentItem from './MyCommetItem';
import NoList from './NoList';
import { getUserCommunityInfo } from '../../lib/api/user';
import styled from 'styled-components';
import { deleteComment } from '../../lib/api/comment';

const StyledPostList = styled.ul`
  margin-top: 2rem;
  padding-right: 1rem;
  .NoList {
    margin-right: 15rem;
    margin-top: 15rem;
  }
`;

function MyPostList({ category }) {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['userPosts', category],
    ({ pageParam = 0 }) => getUserCommunityInfo(category, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { number, totalPages } = lastPage;
        return number + 1 < totalPages ? number + 1 : undefined;
      },
      refetchOnWindowFocus: false,
    },
  );
  const loadMoreRef = useRef(null);
  useEffect(() => {
    if (!hasNextPage) return;
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
      <h2>
        {category === 'scrap'
          ? '스크랩 보기'
          : category === 'comment'
          ? '내가 쓴 댓글'
          : '내가 쓴 글'}
      </h2>
      <StyledPostList>
        {data.pages.length !== 0 &&
          data.pages.map((page, index) => (
            <Fragment key={index}>
              {page.content.length == 0 ? (
                <NoList category={category} className="NoList" />
              ) : (
                page.content.map((post) =>
                  category === 'comment' ? (
                    <MyCommentItem comment={post} key={post.commentId} />
                  ) : (
                    <MyPostItem post={post} key={post.postId} />
                  ),
                )
              )}
            </Fragment>
          ))}
      </StyledPostList>
      <p ref={loadMoreRef} className="loadMore">
        Load More
      </p>
    </section>
  );
}

export default MyPostList;
