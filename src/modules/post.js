const CHANGE_FIELD = 'post/CHANGE_FIELD';
const UPLOAD_IMAGE = 'post/UPLOAD_IMAGE';
const REMOVE_IMAGE = 'post/REMOVE_IMAGE';
const INITIALIZE = 'post/INITIALIZE';

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

export const initialize = (initial) => ({
  type: INITIALIZE,
  initial,
});

const initialState = {
  title: '',
  content: '',
  images: [],
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
        images: state.images.concat({
          image: action.file[0],
          name: action.file[0].name,
          key: action.key,
        }),
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.key != action.id),
      };
    case INITIALIZE:
      return action.initial;
    default:
      return state;
  }
};

export default post;
