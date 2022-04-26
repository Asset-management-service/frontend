import React from 'react';
import { useSelector } from 'react-redux';
import { FormInput } from '../../components/common/FormInput';
import ImagePreview from './ImagePreview';
import Palette from '../../lib/Palette';
import styled from 'styled-components';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const StyledEditor = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  input[type='file'] {
    display: none;
  }
`;

const EditorBox = styled.div`
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 5px 8px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const EditorTextArea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem;
  font-size: 18px;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

const ButtonWrapper = styled.label`
  position: absolute;
  bottom: 10px;
  right: 10px; ;
`;
const ImageButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Palette.cyan[7]};
  margin-left: 10px;
  cursor: pointer;
  svg {
    color: #fff;
  }
`;

export function Editor({ onChange, onUploadImage, onRemoveImage, error }) {
  const { title, content, imageFiles, saveImageUrl } = useSelector(
    ({ post }) => post,
  );
  return (
    <StyledEditor>
      {title !== null && (
        <FormInput
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="제목을 입력하세요"
          error={error}
        />
      )}
      <EditorBox>
        <EditorTextArea
          name="content"
          value={content}
          placeholder="내용을 작성해주세요"
          onChange={onChange}
        />

        <ButtonWrapper>
          <ImageButton>
            <AddPhotoAlternateOutlinedIcon color="#fff" />
          </ImageButton>
          <input accept="image/*" type="file" onChange={onUploadImage} />
        </ButtonWrapper>
        <ImagePreview
          saveImageUrl={saveImageUrl}
          imageFiles={imageFiles}
          removeImage={onRemoveImage}
        />
      </EditorBox>
    </StyledEditor>
  );
}
