const CHANGE_FIELD = 'post/CHANGE_FIELD';
const UPLOAD_IMAGE = 'post/UPLOAD_IMAGE';
const REMOVE_IMAGE = 'post/REMOVE_IMAGE';
const INITIALIZE = 'post/INITIALIZE';
const PREPARE_SHARE = 'post/PREPARE_SHARE';
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

export const prepareShare = () => ({
  type: PREPARE_SHARE,
});

const initialState = {
  title: '',
  content: '',
  imageFiles: [],
  saveImageUrl: [],
  moneyLogImages: [],
  postId: null,
  nextId: 0,
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
          key: state.nextId,
        }),
        nextId: state.nextId + 1,
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        imageFiles: state.imageFiles.filter((image) => image.key !== action.id),
        saveImageUrl: state.saveImageUrl.filter(
          (image) => image.key !== action.id,
        ),
        moneyLogImages: state.moneyLogImages.filter(
          (image) => image.key !== action.id,
        ),
      };
    case INITIALIZE:
      return {
        title: '',
        content: '',
        imageFiles: [],
        saveImageUrl: [],
        moneyLogImages: [],
        postId: null,
        nextId: 0,
      };
    case PREPARE_SHARE:
      return {
        ...state,
        title: '',
        postId: null,
        saveImageUrl: [],
        imageFiles: [],
        moneyLogImages: state.saveImageUrl,
        nextId: state.saveImageUrl.length + 1,
      };
    case SET_POST:
      return action.post;
    default:
      return state;
  }
};

export default post;
