import PostItem from './PostItem';

function PostList({ data }) {
  return (
    <ul>
      {data.length != 0 &&
        data.map((post, index) => <PostItem key={index} post={post} />)}
    </ul>
  );
}

export default PostList;
