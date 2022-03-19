import NoList from './NoList';

function MyCommentList({ comments }) {
  return (
    <section>
      <h2>Comment</h2>
      {comments.length === 0 ? (
        <NoList category="comment" />
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MyCommentList;
