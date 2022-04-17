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
  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
    padding: 3px;
    text-align: center;
    background-color: aliceblue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* 말줄임 적용 */
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

function ImagePreview({ images, removeImage }) {
  return (
    <div>
      {images && images.length !== 0 && (
        <PreviewWrapper>
          <PreviewList>
            {images.map((image) => (
              <StyledPreview key={image.key}>
                <img src={URL.createObjectURL(image.image)} />
                <RemoveButton onClick={() => removeImage(image.key)}>
                  <CloseRoundedIcon />
                </RemoveButton>
                <p>{image.name}</p>
              </StyledPreview>
            ))}
          </PreviewList>
        </PreviewWrapper>
      )}
    </div>
  );
}

export default ImagePreview;
