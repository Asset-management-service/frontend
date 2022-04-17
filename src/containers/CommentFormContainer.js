import { useDispatch } from 'react-redux';
import CommentForm from '../components/Community/CommentForm';

function CommentFormContainer({
  type,
  parentId,
  postId,
  commentId,
  comment,
  isEdit,
}) {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      // 수정 api
      console.log(commentId);
    } else {
      // 추가 api
      console.log(parentId);
      console.log(postId);
    }
  };

  return (
    <CommentForm
      type={type}
      parentId={parentId}
      postId={postId}
      commentId={commentId}
      comment={comment}
      onSubmit={onSubmit}
    />
  );
}

export default CommentFormContainer;
