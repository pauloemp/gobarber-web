import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import ContextProviders from './hooks';

const App: React.FC = () => (
  <>
    <ContextProviders>
      <SignIn />
    </ContextProviders>

    <GlobalStyle />
  </>
);

export default App;
