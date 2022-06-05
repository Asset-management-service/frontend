import styled from 'styled-components';
import HistoryFormContainer from '../../containers/HistoryFormContainer';
import HistoryMainContainer from '../../containers/HistoryMainContainer';

const Section = styled.section`
  position: relative;
  display: flex;
  width: 90vw;
  margin: 0 auto;
  max-width: 1000px;
  .plusBtn {
    position: fixed;
    bottom: 3rem;
    z-index: 2;
    right: 4rem;
    font-size: 50px;
    cursor: pointer;
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
