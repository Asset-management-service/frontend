import styled from 'styled-components';

const StyledImageList = styled.ul`
  img {
    max-width: 900px;
    width: 70vw;
    object-fit: cover;
    margin: 1rem 0 2rem;
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
