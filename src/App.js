import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/common/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import MySubPage from './pages/MySubPage';
import OauthRedirect from './components/Login/OauthRedirect';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  const navigate = useNavigate();
  const { loading, auth } = useSelector(({ login }) => login);
  useEffect(() => {
    if (!auth) navigate('/', { replace: true });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Header loading={loading} auth={auth} />}>
          <Route path="/" element={<Home auth={auth} />} />
          <Route path="/mypage" element={<MyPage auth={auth} />}>
            <Route path=":category" element={<MySubPage />} />
          </Route>
        </Route>
        <Route path="/login/oauth2/code/*" element={<OauthRedirect />} />
        <Route path="/register" />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
