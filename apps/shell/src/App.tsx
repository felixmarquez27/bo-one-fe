import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '../../../styles/globals.css';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Productos } from './pages/Productos';
import { Reportes } from './pages/Reportes';
import { Configuracion } from './pages/Configuracion';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';
import { RemoteNotAvailable } from './components/RemoteNotAvailable';

// Lazy load con manejo de errores para Module Federation
const UsersApp = React.lazy(() =>
  import('users/UsersApp').catch((error) => {
    console.error('Error al cargar el módulo Users:', error);
    // Retornar un módulo por defecto en caso de error
    return {
      default: () => <RemoteNotAvailable moduleName="Users" />
    };
  })
);

// Componente de ruta protegida
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Layout principal con sidebar
interface MainLayoutProps {
  onLogout: () => void;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onLogout, children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-slate-900">Sistema de Gestión</h1>
            <p className="text-sm text-slate-600">Panel de Administración</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          <Suspense fallback={
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mb-4"></div>
                <p className="text-slate-600 text-sm font-medium">Cargando módulo...</p>
              </div>
            </div>
          }>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuarios"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <ErrorBoundary 
                  fallback={<RemoteNotAvailable moduleName="Users" />}
                >
                  <UsersApp />
                </ErrorBoundary>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/configuracion"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <Configuracion />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MainLayout onLogout={handleLogout}>
                <NotFound />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

