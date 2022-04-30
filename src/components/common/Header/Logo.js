import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledLogo = styled.h1`
  text-align: center;
  transition: all 0.2s ease-in-out;
  font-size: 45px;
  font-weight: normal;
  a {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
`;
function Logo({ scroll }) {
  return (
    <StyledLogo scroll={scroll}>
      <Link to="/">Moa Moa</Link>
    </StyledLogo>
  );
}

export default Logo;
