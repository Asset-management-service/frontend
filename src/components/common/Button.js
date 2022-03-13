import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Palette from '../../lib/Palette';

const basicButtonStyle = css`
  color: white;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  font-size: 1.5rem;
  letter-spacing: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem 0.5rem 0.4rem 0.6rem;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  &:disabled {
    background: ${Palette.gray[3]};
    color: ${Palette.gray[5]};
    cursor: not-allowed;
  }
`;

const outlinedButtonStyle = css`
  color: ${({ basicColor }) => (basicColor ? basicColor : 'black')};
  border: ${({ basicColor }) => `1px solid ${basicColor}`};
  &:hover,
  &:active {
    background-color: ${({ basicColor }) => basicColor};
    color: white;
  }
`;

const containedButtonStyled = css`
  background-color: ${({ basicColor }) => basicColor};
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
