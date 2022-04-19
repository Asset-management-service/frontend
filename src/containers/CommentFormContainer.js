import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import CommentForm from '../components/Community/CommentForm';
import { useForm } from '../hooks';
import { createComment, editComment } from '../lib/api/comment';
import { addComment, changeComment } from '../modules/comment';

function CommentFormContainer({
  type,
  parentId,
  postId,
  commentId,
  comment,
  isEdit,
  finishEdit,
}) {
  const dispatch = useDispatch();
  const { form, onChange } = useForm({
    comment: comment,
  });
  const createMutation = useMutation(
    () => createComment(form.comment, postId, parentId),
    {
      onSuccess: (data) => {
        dispatch(
          addComment({
            parentId,
            content: form.comment,
            username: '강은비', // data.username
            createDate: new Date().toString(), // data.createDate
            commentId: data.commentId,
          }),
        );
        onChange({ target: { name: 'comment', value: '' } });
      },
    },
  );
  const editMutation = useMutation(() => editComment(form.comment, commentId), {
    onSuccess: (data) => {
      dispatch(changeComment(data.commentId, form.comment));
      finishEdit();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      // 수정 api
      console.log(commentId);
      editMutation.mutate();
    } else {
      // 추가 api
      createMutation.mutate();
    }
  };
  return (
    <CommentForm
      type={type}
      comment={form.comment}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default CommentFormContainer;
