import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from 'styled-components';

const StyledNavBtn = styled.button`
  display: none;
  @media screen and (max-width: 1300px) {
    display: block;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: rotateZ(90deg);
    }
  }
`;

function NavBtn({ onToggle }) {
  return (
    <StyledNavBtn onClick={onToggle}>
      <MenuRoundedIcon fontSize={'large'} />
    </StyledNavBtn>
  );
}

export default NavBtn;
