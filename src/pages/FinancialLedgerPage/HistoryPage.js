import styled from 'styled-components';
import HistoryFormContainer from '../../containers/HistoryFormContainer';
import HistoryMainContainer from '../../containers/HistoryMainContainer';

const Section = styled.section`
  position: relative;
  display: flex;
  margin: 0 !important;
  overflow: hidden;
  padding-left: 270px;
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
