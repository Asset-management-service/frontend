import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 40px;
  a {
    color: #fff;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        모아모아<span>🐷</span>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
