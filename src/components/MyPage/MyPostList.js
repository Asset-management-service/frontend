import styled, { css } from 'styled-components';
import MyPostItem from './MyPostItem';
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
          ? 'Scrap'
          : category === 'comment'
          ? 'Comment'
          : 'Post'}
      </h2>
      <PostList empty={posts.length}>
        {posts.length === 0 ? (
          <NoList category={category} />
        ) : (
          <ul>
            {posts.map((post) => (
              <MyPostItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      </PostList>
    </section>
  );
}

export default MyPostList;
