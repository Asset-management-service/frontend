import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledLogo = styled(Link)`
  text-align: center;
  transition: all 0.2s ease-in-out;
  color: #fe676e;
  ${({ scroll }) =>
    scroll
      ? css`
          font-size: 38px;
        `
      : css`
          font-size: 60px;
        `}
  h1 {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
`;
function Logo({ scroll }) {
  return (
    <StyledLogo to="/" scroll={scroll}>
      <h1>Moa Moa</h1>
    </StyledLogo>
  );
}

export default Logo;
