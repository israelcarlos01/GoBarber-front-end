import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    // O Router passando o history como parêmetro para ele ser escutado na aplicação
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
