import { useCallback, useRef } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: auto;
  border-bottom: 1px solid lightgray;
  font-size: 15px;
  resize: none;
  overflow: ${({ noscroll }) => noscroll && 'hidden'};
  &:focus {
    outline: none;
    border-bottom-color: #000;
  }
`;
export function TextArea({ name, value, onChange, placeholder, noscroll }) {
  const ref = useRef(null);
  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) return;
    ref.current.style.height = '38px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  }, []);
  return (
    <StyledTextArea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      noscroll={noscroll}
      ref={noscroll && ref}
      onInput={noscroll && handleResizeHeight}
    />
  );
}
