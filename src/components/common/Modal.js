import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.div`
  padding: 3rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  max-height: 90vh;
  overflow-y: scroll;
  h1 {
    font-size: 30px;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 4rem 1rem;
    font-weight: normal;
    margin-bottom: 3rem;
  }
  .Modal-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    svg {
      font-size: 30px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
    width: 3px;
    padding-right: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 50%;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  button {
    margin: 0 1rem;
    font-size: 20px;
    width: 100px;
    color: black;
  }
`;
