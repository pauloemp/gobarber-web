import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import ContextProviders from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <ContextProviders>
    <Router>
      <Routes />
    </Router>

    <GlobalStyle />
  </ContextProviders>
);

export default App;
