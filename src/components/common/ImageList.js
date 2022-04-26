import styled from 'styled-components';

const StyledImageList = styled.ul`
  img {
    max-width: 900px;
    object-fit: cover;
    margin: 2rem 0;
  }
`;
function ImageList({ images }) {
  return (
    <StyledImageList>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} />
        </li>
      ))}
    </StyledImageList>
  );
}

export default ImageList;
