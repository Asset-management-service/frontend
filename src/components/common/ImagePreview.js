import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const PreviewWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-top: 1px solid lightgray;
  h3 {
    font-size: 15px;
    margin-bottom: 1rem;
  }
`;

const PreviewList = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledPreview = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-left: 2rem;
  }
  img {
    height: 100px;
    object-fit: cover;
  }
`;

const RemoveButton = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  cursor: pointer;
  svg {
    color: #fff;
    font-size: 18px;
  }
`;

function ImagePreview({
  saveImageUrl,
  imageFiles,
  moneyLogImages,
  removeImage,
}) {
  return (
    <div>
      {(saveImageUrl || imageFiles || moneyLogImages) &&
        (saveImageUrl.length !== 0 ||
          imageFiles.length !== 0 ||
          moneyLogImages.length !== 0) && (
          <PreviewWrapper>
            <PreviewList>
              {saveImageUrl.length !== 0 &&
                saveImageUrl.map((image) => (
                  <StyledPreview key={image.key}>
                    <img src={image.image} />
                    <RemoveButton onClick={() => removeImage(image.key)}>
                      <CloseRoundedIcon />
                    </RemoveButton>
                  </StyledPreview>
                ))}
              {moneyLogImages.length !== 0 &&
                moneyLogImages.map((image) => (
                  <StyledPreview key={image.key}>
                    <img src={image.image} />
                    <RemoveButton onClick={() => removeImage(image.key)}>
                      <CloseRoundedIcon />
                    </RemoveButton>
                  </StyledPreview>
                ))}
              {imageFiles.length !== 0 &&
                imageFiles.map((image) => (
                  <StyledPreview key={image.key}>
                    <img src={URL.createObjectURL(image.image)} />
                    <RemoveButton onClick={() => removeImage(image.key)}>
                      <CloseRoundedIcon />
                    </RemoveButton>
                  </StyledPreview>
                ))}
            </PreviewList>
          </PreviewWrapper>
        )}
    </div>
  );
}

export default ImagePreview;
