import { Link } from 'react-router-dom';
import logoImg from '../../../images/moamoa-logo-2.png';
import styled from 'styled-components';

const StyledLogo = styled(Link)`
  z-index: 5;
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <img src={logoImg} alt="moamoa logo" />
    </StyledLogo>
  );
}

export default Logo;
