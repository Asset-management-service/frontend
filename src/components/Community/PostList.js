import { Fragment } from 'react';
import PostItem from './PostItem';

function PostList({ pages }) {
  return (
    <ul>
      {pages.length !== 0 &&
        pages.map((page, index) => (
          <Fragment key={index}>
            {page.content.length == 0 ? (
              <p>작성된 글이 없습니다.</p>
            ) : (
              page.content.map((post) => (
                <PostItem post={post} key={post.postId} />
              ))
            )}
          </Fragment>
        ))}
    </ul>
  );
}

export default PostList;
