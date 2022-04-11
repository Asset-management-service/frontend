import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '../components/common/Editor';
import {
  changeField,
  uploadImage,
  removeImage,
  initialize,
} from '../modules/post';

const EditorContainer = ({ initialState }) => {
  const { title, content, images } = useSelector(({ post }) => post);
  const dispatch = useDispatch();
  const nextId = useRef(0);
  useEffect(() => dispatch(initialize(initialState)), []);
  const onChange = (e) => {
    dispatch(changeField(e.target.name, e.target.value));
  };

  const onUploadImage = (e) => {
    dispatch(uploadImage(e.target.files, nextId.current));
    nextId.current++;
    e.target.value = '';
  };

  const onRemoveImage = (id) => {
    dispatch(removeImage(id));
  };

  return (
    <Editor
      value={{ title, content, images }}
      onChange={onChange}
      onUploadImage={onUploadImage}
      onRemoveImage={onRemoveImage}
    />
  );
};

export default EditorContainer;
