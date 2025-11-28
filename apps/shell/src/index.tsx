import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BOOneThemeProvider } from '@bo-one/design-system';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BOOneThemeProvider>
        <App />
      </BOOneThemeProvider>
    </React.StrictMode>,
  );
}