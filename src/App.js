import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardArrowDownRoundedIcon />
    </QueryClientProvider>
  );
}

export default App;
