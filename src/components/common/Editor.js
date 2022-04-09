import React from 'react';
import ImagePreview from '../Community/ImagePreview';
import Palette from '../../lib/Palette';
import styled from 'styled-components';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const StyledEditor = styled.div`
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 5px 8px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  input[type='file'] {
    display: none;
  }
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

export function Editor({
  content,
  onChange,
  uploadImage,
  images,
  removeImage,
}) {
  return (
    <StyledEditor>
      <EditorTextArea
        name="content"
        value={content}
        onChange={onChange}
        placeholder="내용을 작성해주세요"
      />
      <ButtonWrapper>
        <ImageButton>
          <AddPhotoAlternateOutlinedIcon color="#fff" />
        </ImageButton>
        <input accept="image/*" type="file" onChange={uploadImage} />
      </ButtonWrapper>
      <ImagePreview images={images} removeImage={removeImage} />
    </StyledEditor>
  );
}
