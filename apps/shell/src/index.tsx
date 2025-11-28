import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TestPage } from './pages/TestPage';
import { BOOneThemeProvider } from '@bo-one/design-system';


const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <TestPage />
    </React.StrictMode>,
  );
}