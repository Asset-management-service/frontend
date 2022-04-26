import { useRef, useState, useEffect } from 'react';
import { useToggle } from '../../hooks';
import styled from 'styled-components';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const StyledComboBox = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  cursor: ${({ noSelect }) => !noSelect && 'pointer'};
  font-size: 15px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ noSelect }) => (noSelect ? 'center' : 'space-between')};
  height: 100%;
  padding: ${({ noSelect }) =>
    noSelect ? '0.3rem' : '0.3rem 0.3rem 0.3rem 1rem'};
  font-weight: bold;
  svg {
    color: gray;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  transition: all 0.2s ease-in;
  border-radius: 15px;
  max-height: 0;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  background-color: #fff;
  overflow-y: scroll;
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
  width: 100%;
  &:hover,
  &.selected {
    font-weight: bold;
  }
  &:last-child {
    border-bottom: 0 none;
  }
`;

export function ComboBox({
  categories,
  initialLabel,
  mainColor,
  onChange,
  unit,
  noSelect,
}) {
  const [label, setLabel] = useState(initialLabel);
  const [active, onActive, setActive] = useToggle(false);
  const optionList = useRef(null);
  const comboBox = useRef(null);
  const onSelect = (label) => {
    setLabel(label);
    onChange(label);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (comboBox.current && !comboBox.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setLabel(initialLabel);
  }, [initialLabel]);
  return (
    <StyledComboBox
      onClick={noSelect ? undefined : onActive}
      className={active ? 'active ComboBox' : 'ComboBox'}
      ref={comboBox}
      noSelect={noSelect}
    >
      <Label noSelect={noSelect}>
        {label}
        {unit}
        {!noSelect && <KeyboardArrowDownRoundedIcon />}
      </Label>
      <OptionsList
        mainColor={mainColor}
        className={active ? 'active' : ''}
        ref={optionList}
      >
        {categories &&
          categories.map((category, index) => (
            <OptionItem
              key={index}
              onClick={() => onSelect(category)}
              className={category === label ? 'selected' : ''}
            >
              {category}
              {unit}
            </OptionItem>
          ))}
      </OptionsList>
    </StyledComboBox>
  );
}
