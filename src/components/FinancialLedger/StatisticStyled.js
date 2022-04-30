import { Button } from '../common/Button';
import styled, { css } from 'styled-components';
export const StatisticWrapper = styled.div`
  position: relative;
  min-height: 40vh;
  ${({ status }) =>
    status === 'loading' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  .heading {
    display: flex;
    align-items: center;
    margin: 2rem 0 1rem;
  }
  .prevBtn {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
  }
  .nextBtn {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
  }
  h1 {
    font-size: 25px;
    margin-right: 1rem;
  }
  p {
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
  .red {
    color: #f06f6c;
    font-weight: bold;
  }
`;

export const GraphWrapper = styled.div`
  width: 80vw;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 auto;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 12px;
  border-radius: 30px;
  margin-top: 5px;
`;
