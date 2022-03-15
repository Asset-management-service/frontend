import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from 'styled-components';

const StyledNavBtn = styled.button`
  display: none;
  color: #fff;
  @media screen and (max-width: 1120px) {
    display: block;
    transition: all 0.2s ease-in-out;
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
