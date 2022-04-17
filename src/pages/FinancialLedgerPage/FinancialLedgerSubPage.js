import { useParams } from 'react-router-dom';
import HistoryPage from './HistoryPage';
import MoneyLogPage from './MoneyLogPage';

function FinancialLedgerSubPage() {
  const { category } = useParams();
  if (category === 'moneylog') {
    return <MoneyLogPage />;
  }
  if (category === 'history') {
    return <HistoryPage />;
  }
  return <section>sub</section>;
}

export default FinancialLedgerSubPage;
