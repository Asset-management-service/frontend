import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/common/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import MySubPage from './pages/MyPage/MySubPage';
import OauthRedirect from './components/Login/OauthRedirect';
import CommunityPage from './pages/CommunityPage';
import CommunitySubPage from './pages/CommunityPage/CommunitySubPage';
import CommunityWritePage from './pages/CommunityPage/CommunityWritePage';
import FinancialLedgerPage from './pages/FinancialLedgerPage';
import FinancialLedgerSubPage from './pages/FinancialLedgerPage/FinancialLedgerSubPage';
import { loginSuccess } from './modules/login';
import './App.scss';
import PersonalInfoChangeForm from './components/MyPage/PersonalInfoChangeForm';

const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  const { loading, auth } = useSelector(({ login }) => login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(loginSuccess(token));
    }
  }, [token]);
  return (
    <QueryClientProvider client={queryClient}>
      <PersonalInfoChangeForm></PersonalInfoChangeForm>
    </QueryClientProvider>
  );
}

export default App;
