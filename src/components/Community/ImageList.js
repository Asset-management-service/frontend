import styled from 'styled-components';

const StyledImageList = styled.ul`
  margin-bottom: 2rem;
  img {
    max-width: 1000px;
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
