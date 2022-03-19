import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Palette from '../../lib/Palette';

const basicButtonStyle = css`
  text-align: center;
  color: white;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  font-size: 1.3rem;
  letter-spacing: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.3rem 0.5rem 0.4rem 0.6rem;
  box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: ${Palette.gray[3]};
    color: ${Palette.gray[5]};
    cursor: not-allowed;
  }
`;

const outlinedButtonStyle = css`
  color: ${({ basiccolor }) => (basiccolor ? basiccolor : 'black')};
  border: ${({ basiccolor }) => `1px solid ${basiccolor}`};
  &:hover,
  &:active {
    background-color: ${({ basiccolor }) => basiccolor};
    color: white;
  }
`;

const containedButtonStyled = css`
  background-color: ${({ basiccolor }) => basiccolor};
  &:hover,
  &:active {
    background-color: ${({ hover }) => hover};
  }
`;

const StyledButton = styled.button`
  ${basicButtonStyle}
  ${({ outlined }) => (outlined ? outlinedButtonStyle : containedButtonStyled)}
`;

const StyledLink = styled(Link)`
  ${basicButtonStyle}
  ${({ outlined }) => (outlined ? outlinedButtonStyle : containedButtonStyled)}
`;

export function Button({ to, ...rest }) {
  return to ? <StyledLink to={to} {...rest} /> : <StyledButton {...rest} />;
}
