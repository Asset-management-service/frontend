import styled from 'styled-components';

const StyledImageList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    max-width: 900px;
    margin: 1rem 0 2rem;
  }
  img {
    width: 100%;
    object-fit: cover;
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
