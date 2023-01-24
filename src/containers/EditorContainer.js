import { useDispatch } from 'react-redux';
import { Editor } from '../components/common/Editor';
import { changeField, uploadImage, removeImage } from '../modules/post';

const EditorContainer = ({ error }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  };
  const onUploadImage = (e) => {
    dispatch(uploadImage(e.target.files[0]));
    e.target.value = '';
  };

  const onRemoveImage = (id) => {
    dispatch(removeImage(id));
  };

  return (
    <Editor
      error={error}
      onUploadImage={onUploadImage}
      onRemoveImage={onRemoveImage}
      onChange={onChange}
    />
  );
};

export default EditorContainer;
