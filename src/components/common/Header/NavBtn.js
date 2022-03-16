import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from 'styled-components';

const StyledNavBtn = styled.button`
  display: none;
`;

function NavBtn({ onToggle }) {
  return (
    <StyledNavBtn onClick={onToggle}>
      <MenuRoundedIcon fontSize={'large'} />
    </StyledNavBtn>
  );
}

export default NavBtn;
