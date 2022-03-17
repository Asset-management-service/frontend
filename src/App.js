import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/common/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import OauthRedirect from './components/Login/OauthRedirect';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  const { loading, auth } = useSelector(({ login }) => login);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Header loading={loading} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/oauth2/code/*" element={<OauthRedirect />} />
        <Route path="/register" />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
