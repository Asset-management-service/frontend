import { useParams } from 'react-router-dom';
import HistoryPage from './HistoryPage';
import MoneyLogPage from './MoneyLogPage';
import StatisticPage from './StatisticPage';
import SettingPage from './SettingPage';

function FinancialLedgerSubPage() {
  const { category } = useParams();
  if (category === 'moneylog') {
    return <MoneyLogPage />;
  }
  if (category === 'history') {
    return <HistoryPage />;
  }
  if (category === 'statistic') {
    return <StatisticPage />;
  }
  if (category === 'setting') {
    return <SettingPage />;
  }
  return <section>sub</section>;
}

export default FinancialLedgerSubPage;
