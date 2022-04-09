import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/common/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import MySubPage from './pages/MyPage/MySubPage';
import OauthRedirect from './components/Login/OauthRedirect';
import CommunityPage from './pages/CommunityPage';
import CommunitySubPage from './pages/CommunityPage/CommunitySubPage';
import CommunityWritePage from './pages/CommunityPage/CommunityWritePage';
import MoneyBook from './pages/MoneyBook';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  const { loading, auth } = useSelector(({ login }) => login);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Header loading={loading} />}>
          <Route path="/mypage" element={<MyPage auth={auth} />}>
            <Route path=":category" element={<MySubPage />} />
          </Route>
          <Route path="/moneybook" element={<MoneyBook auth={auth} />} />
          <Route path="/community" element={<CommunityPage />}>
            <Route path=":category" element={<CommunitySubPage />}>
              <Route path=":id" element={<CommunitySubPage />} />
            </Route>
          </Route>
          <Route path="/community/write" element={<CommunityWritePage />} />
        </Route>
        <Route path="/oauth/redirect" element={<OauthRedirect />} />
        <Route path="/register" />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
