import React, { Suspense } from 'react';
import '../../../styles/globals.css';
const UsersApp = React.lazy(() => import('users/UsersApp'));

const App: React.FC = () => (
  <div className="content">
    <h1 className="text-3xl font-bold underline">Rsbuild with React</h1>
    <Suspense fallback={<div>Cargando UsersAp...</div>}>

      <UsersApp />
    </Suspense>
  </div>
);

export default App;

