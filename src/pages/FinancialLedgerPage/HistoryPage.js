import styled from 'styled-components';
import HistoryFormContainer from '../../containers/HistoryFormContainer';
import HistoryMainContainer from '../../containers/HistoryMainContainer';

const Section = styled.section`
  position: relative;
  display: flex;
  margin: 0 !important;
  overflow: hidden;
  .plusBtn {
    display: none;
  }
  @media screen and (max-width: 1400px) {
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
  return (
    <Section>
      <HistoryMainContainer />
      <HistoryFormContainer />
    </Section>
  );
}

export default HistoryPage;
