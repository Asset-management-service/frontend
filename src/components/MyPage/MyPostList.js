import styled, { css } from 'styled-components';
import MyPostItem from './MyPostItem';
import MyCommentItem from './MyCommetItem';
import NoList from './NoList';

const PostList = styled.div`
  height: 88%;
  margin-top: 2rem;
  overflow-y: scroll;
  padding-right: 1rem;
  ${({ empty }) =>
    empty === 0 &&
    css`
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;
function MyPostList({ posts, category }) {
  return (
    <section>
      <h2>
        {category === 'scrap'
          ? '스크랩 보기'
          : category === 'comment'
          ? '내가 쓴 댓글'
          : '내가 쓴 글'}
      </h2>
      <PostList empty={posts.length}>
        {posts.length === 0 ? (
          <NoList category={category} />
        ) : (
          <ul>
            {category == 'comment'
              ? posts.map((post, index) => (
                  <MyCommentItem key={index} comment={post} />
                ))
              : posts.map((post, index) => (
                  <MyPostItem key={index} post={post} />
                ))}
          </ul>
        )}
      </PostList>
    </section>
  );
}

export default MyPostList;
