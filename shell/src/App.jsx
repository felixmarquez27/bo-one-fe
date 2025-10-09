import React, { Suspense } from 'react';
const UsersApp = React.lazy(() => import('remote1/UsersApp'));
import './App.css';
const App = () => (
  <div className="content">
    <h1>Rsbuild with React</h1>
    <Suspense fallback={<div>Cargando UsersApp...</div>}>
      <UsersApp />
    </Suspense>
  </div>
);

export default App;

