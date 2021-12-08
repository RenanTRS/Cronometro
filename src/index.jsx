import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Reset } from './styles/reset';
import { Base } from './styles/base';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);