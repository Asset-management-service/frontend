import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/common/Header';
import { Button } from './components/common/Button';
import { ComboBox } from './components/common/ComboBox';
import { DropMenu } from './components/common/DropMenu';
import { securityCategory } from './constants';
import Palette from './lib/Palette';
import Loading from './components/common/Loading';
import PersonalInfoChangeForm from './components/MyPage/PersonalInfoChangeForm';
import styled from 'styled-components';
import './App.scss';

const queryClient = new QueryClient();

// constants 폴더로 옮길 예정
const menus = [
  {
    id: 1,
    menu: '머니로그 작성',
  },
  {
    id: 2,
    menu: '수정',
  },
  {
    id: 3,
    menu: '삭제',
  },
];

const StyledButton = styled(Button)`
  margin: 1rem;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonalInfoChangeForm></PersonalInfoChangeForm>
    </QueryClientProvider>
  );
}

export default App;
