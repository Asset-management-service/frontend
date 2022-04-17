const SET_COMMENT_LIST = 'comment/SET_COMMENT_LIST';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';
const DELETE_COMMENT = 'comment//DELETE_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const SET_LOADING = 'comment/SET_LOADING';

export const setCommentList = (comments) => ({
  type: SET_COMMENT_LIST,
  comments,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

export const editComment = (id, content) => ({
  type: EDIT_COMMENT,
  id,
  content,
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});
const initialState = {
  comments: [],
  loading: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT_LIST:
      return {
        comments: action.comments,
      };
    case ADD_COMMENT:
      const { parentId, content, username, createDate, commentId } =
        action.comment;
      if (!parentId) {
        return {
          comments: state.comments.concat({
            parentId,
            content,
            createDate,
            commentId,
            username,
            children: [],
          }),
        };
      } else {
        return {
          comments: state.comments.map((comment) =>
            comment.commentId === parentId
              ? {
                  ...comment,
                  children: comment.children.concat({
                    parentId,
                    content,
                    createDate,
                    commentId,
                    username,
                  }),
                }
              : comment,
          ),
        };
      }
    case EDIT_COMMENT:
      return {
        comments: state.comments.map((comment) =>
          comment.commentId === action.id
            ? {
                ...comment,
                content: action.content,
              }
            : {
                ...comment,
                children: comment.children.map((recomment) =>
                  recomment.commentId === action.id
                    ? {
                        ...recomment,
                        content: action.content,
                      }
                    : recomment,
                ),
              },
        ),
      };
    case DELETE_COMMENT:
      return {
        comments: state.comments.map(
          (comment) =>
            comment.commentId !== action.id && {
              ...comment,
              children: comment.children.filter(
                (recomment) => recomment.commentId !== action.id,
              ),
            },
        ),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default comment;
