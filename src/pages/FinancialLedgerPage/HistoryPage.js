import { useState } from 'react';
import styled from 'styled-components';
import HistoryFormContainer from '../../containers/HistoryFormContainer';
import HistoryMainContainer from '../../containers/HistoryMainContainer';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Section = styled.section`
  position: relative;
  display: flex;
  margin: 0 !important;
  overflow: hidden;
  .plusBtn {
    display: none;
  }
  @media screen and (max-width: 1400px) {
    .HistoryForm {
      display: none;
      display: ${({ show }) => (show ? 'flex' : 'none')};
    }
    .plusBtn {
      display: block;
      position: fixed;
      bottom: 3rem;
      z-index: 2;
      right: 1rem;
      font-size: 40px;
      cursor: pointer;
      color: #40b2b7;
    }
  }
`;
function HistoryPage() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  return (
    <Section show={show}>
      <HistoryMainContainer />
      <AddBoxOutlinedIcon className="plusBtn" onClick={onClick} />
      <HistoryFormContainer onClose={onClose} show={show} />
    </Section>
  );
}

export default HistoryPage;
