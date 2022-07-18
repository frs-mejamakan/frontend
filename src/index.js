import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MixpanelProvider } from 'react-mixpanel-browser';

require('helvatica-neue-lt/index.css');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MixpanelProvider>
      <App />
    </MixpanelProvider>
  </React.StrictMode>
);
