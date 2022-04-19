const CHANGE_FIELD = 'post/CHANGE_FIELD';
const UPLOAD_IMAGE = 'post/UPLOAD_IMAGE';
const REMOVE_IMAGE = 'post/REMOVE_IMAGE';
const INITIALIZE = 'post/INITIALIZE';
const SET_POST = 'post/SET_POST';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const uploadImage = (file, key) => ({
  type: UPLOAD_IMAGE,
  file,
  key,
});

export const removeImage = (id) => ({
  type: REMOVE_IMAGE,
  id,
});

export const initialize = () => ({
  type: INITIALIZE,
});

export const setPost = (post) => ({
  type: SET_POST,
  post,
});

const initialState = {
  title: '',
  content: '',
  imageFiles: [],
  postId: null,
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        imageFiles: state.imageFiles.concat({
          image: action.file,
          key: action.key,
        }),
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        imageFiles: state.imageFiles.filter((image) => image.key !== action.id),
      };
    case INITIALIZE:
      return {
        title: '',
        content: '',
        images: [],
      };
    case SET_POST:
      return action.post;
    default:
      return state;
  }
};

export default post;
