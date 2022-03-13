import { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const StyledDropBox = styled.div`
  position: relative;
  width: 300px;
  height: 35px;
  border-radius: 4px;
  border: 2px solid #000;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: lightgray;
  overflow-y: scroll;
  transition: all 0.3s ease-in;
  border-radius: 4px;
  max-height: 0;
  &.active {
    max-height: 300px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
`;

const OptionItem = styled.li`
  padding: 10px 15px;
  transition: 0.1s;
  &:hover,
  &.selected {
    background-color: gray;
  }
  &:last-child {
    border-bottom: 0 none;
  }
`;

export function DropBox({ categories, initialLabel, mainColor }) {
  const [label, setLabel] = useState(initialLabel);
  const [active, setActive] = useState(false);
  const onSelect = (category) => {
    setLabel(category);
  };
  return (
    <StyledDropBox onClick={() => setActive(!active)}>
      <Label>
        {label}
        <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
      </Label>
      <OptionsList mainColor={mainColor} className={active ? 'active' : ''}>
        {categories.map((category, index) => (
          <OptionItem
            key={index}
            onClick={() => onSelect(category)}
            className={category === label ? 'selected' : ''}
          >
            {category}
          </OptionItem>
        ))}
      </OptionsList>
    </StyledDropBox>
  );
}
