import Login from './Login';
function Home({ auth }) {
  if (!auth) {
    return <Login />;
  }
  return <main></main>;
}

export default Home;
