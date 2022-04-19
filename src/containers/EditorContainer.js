import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Editor } from '../components/common/Editor';
import { changeField, uploadImage, removeImage } from '../modules/post';

const EditorContainer = ({ contentRef, error }) => {
  const dispatch = useDispatch();
  const nextId = useRef(0);

  const onChange = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  };
  const onUploadImage = (e) => {
    dispatch(uploadImage(e.target.files[0], nextId.current));
    nextId.current++;
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
      contentRef={contentRef}
    />
  );
};

export default EditorContainer;
